const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = require("./product");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetToken: String,
  resetTokenExpiration: Date,
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

userSchema.methods.addToCart = function (product) {
  const cartProductIndex = this.cart.items.findIndex((cp) => {
    console.log(cp.productId);
    console.log(product._id);
    return cp.productId.toString() === product._id.toString();
  });
  let newQuantity = 1;
  const updatedCartItems = [...this.cart.items];
  if (cartProductIndex >= 0) {
    newQuantity = this.cart.items[cartProductIndex].quantity + 1;
    updatedCartItems[cartProductIndex].quantity = newQuantity;
  } else {
    updatedCartItems.push({
      productId: product._id,
      quantity: newQuantity,
    });
  }
  const updatedCart = {
    items: updatedCartItems,
  };

  this.cart = updatedCart;
  return this.save();
};

userSchema.methods.removeFromCart = function (productId) {
  const updatedCartItems = this.cart.items.filter((item) => {
    return item.productId.toString() !== productId.toString();
  });

  this.cart.items = updatedCartItems;
  return this.save();
};

userSchema.methods.addOrder = function () {
  return this.getCart()
    .then((products) => {
      const order = {
        items: products,
        user: {
          _id: new ObjectId(this._id),
          username: this.username,
        },
      };
      return db.collection("orders").insertOne(order);
    })
    .then((result) => {
      this.cart = { items: [] };
      return db
        .collection("users")
        .updateOne(
          { _id: new ObjectId(this._id) },
          { $set: { cart: { items: [] } } }
        );
    });
};

userSchema.methods.getOrder = function () {
  const db = getDb();
  return db
    .collection("orders")
    .find({ "user._id": new ObjectId(this._id) })
    .toArray()
    .then((orders) => {
      console.log(orders);
      return orders;
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

userSchema.methods.clearCart = function () {
  this.cart = { items: [] };
  return this.save();
};

module.exports = mongoose.model("User", userSchema);

// const mongodb = require("mongodb");
// const getDb = require("../util/database").getDb;

// const ObjectId = mongodb.ObjectId;
// const Product = require("./product");

// class User {
//   constructor(username, email, cart, id) {
//     this.username = username;
//     this.email = email;
//     this.cart = cart;
//     this._id = id ? new ObjectId(id) : null;
//   }

//   save() {
//     const db = getDb();
//     if (this._id) {
//       return db
//         .collection("users")
//         .updateOne({ _id: this._id }, { $set: this });
//     } else {
//       return db.collection("users").insertOne(this);
//     }
//   }

//   addToCart(product) {
//     const cartProductIndex = this.cart.items.findIndex((cp) => {
//       console.log(cp.productId);
//       console.log(product._id);
//       return cp.productId.toString() === product._id.toString();
//     });
//     let newQuantity = 1;
//     const updatedCartItems = [...this.cart.items];
//     if (cartProductIndex >= 0) {
//       newQuantity = this.cart.items[cartProductIndex].quantity + 1;
//       updatedCartItems[cartProductIndex].quantity = newQuantity;
//     } else {
//       updatedCartItems.push({
//         productId: new ObjectId(product._id),
//         quantity: newQuantity,
//       });
//     }

//     const updatedCart = {
//       items: updatedCartItems,
//     };
//     const db = getDb();
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: updatedCart } }
//       );
//   }

// function getCart() {
//   User.findById(req.session.user._id)
//     .then((user) => {
//       const productIds = user.cart.items.map((i) => {
//         return i.productId;
//       });
//       Product.find({ _id: { $in: productIds } })
//         .toArray()
//         .then((products) => {
//           const existingIds = products.map((i) => {
//             return i._id;
//           });
//           console.log("Products Array", products);
//           const removedIds = productIds.filter(
//             (x) => !existingIds.toString().includes(x.toString())
//           );
//           console.log("REMOVED IDS", removedIds);
//           removedIds.map((r_id) => {
//             user
//               .removeFromCart(r_id)
//               .then((result) => {
//                 console.log(r_id, "Item Deleted and User Updated");
//               })
//               .catch((err) => console.log(err));
//           });
//           return products.map((p) => {
//             return {
//               ...p,
//               quantity: this.cart.items.find((i) => {
//                 return i.productId.toString() === p._id.toString();
//               }).quantity,
//             };
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

//   deleteItemFromCart(productId) {
//     const updatedCartItems = this.cart.items.filter((item) => {
//       return item.productId.toString() !== productId.toString();
//     });
//     const db = getDb();
//     return db
//       .collection("users")
//       .updateOne(
//         { _id: new ObjectId(this._id) },
//         { $set: { cart: { items: updatedCartItems } } }
//       );
//   }

//   addOrder() {
//     const db = getDb();
//     return this.getCart()
//       .then((products) => {
//         const order = {
//           items: products,
//           user: {
//             _id: new ObjectId(this._id),
//             username: this.username,
//           },
//         };
//         return db.collection("orders").insertOne(order);
//       })
//       .then((result) => {
//         this.cart = { items: [] };
//         return db
//           .collection("users")
//           .updateOne(
//             { _id: new ObjectId(this._id) },
//             { $set: { cart: { items: [] } } }
//           );
//       });
//   }

//   getOrders() {
//     const db = getDb();
//     return db
//       .collection("orders")
//       .find({ "user._id": new ObjectId(this._id) })
//       .toArray()
//       .then((orders) => {
//         console.log(orders);
//         return orders;
//       })
//       .catch((err) => console.log(err));
//   }

//   static findById(userId) {
//     const db = getDb();
//     return db.collection("users").findOne({ _id: new ObjectId(userId) });
//   }
// }

// module.exports = User;
