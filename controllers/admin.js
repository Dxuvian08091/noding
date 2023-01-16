const fileHelper = require("../util/file");

const { validationResult } = require("express-validator");
const Product = require("../models/product");
const User = require("../models/user");

exports.getAddProduct = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
    errorMessage: message,
    oldInput: {
      title: "",
      price: "",
      description: "",
    },
    validationErrors: [],
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const image = req.file;
  const price = req.body.price;
  const description = req.body.description;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: false,
      errorMessage: errors.array()[0].msg,
      oldInput: {
        title: title,
        price: price,
        description: description,
      },
      validationErrors: errors.array(),
    });
  }

  if (!image) {
    return res.status(422).render("admin/edit-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      editing: false,
      errorMessage: "Attached file is not an image",
      oldInput: {
        title: title,
        price: price,
        description: description,
      },
      validationErrors: "[]",
    });
  }
  const imageUrl = image.path;
  const product = new Product({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    userId: req.session.user,
  });
  product
    .save()
    .then((result) => {
      console.log("CREATED PRODUCT");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      // res.redirect("/500");
      console.log("I was sent to middle ware from here");
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode != "true") {
    console.log("edit Mode", editMode);
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      let message = req.flash("error");
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        // product: product,
        errorMessage: message,
        oldInput: {
          productId: product._id,
          title: product.title,
          price: product.price,
          description: product.description,
        },
        validationErrors: [],
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  const updatedImage = req.file;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: true,
      errorMessage: errors.array()[0].msg,
      oldInput: {
        productId: prodId,
        title: updatedTitle,
        price: updatedPrice,
        description: updatedDescription,
      },
      validationErrors: errors.array(),
    });
  }
  Product.findById(prodId)
    .then((product) => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect("/");
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDescription;
      if (updatedImage) {
        fileHelper.deleteFile(product.imageUrl);
        product.imageUrl = updatedImage.path;
      }
      return product.save().then((result) => {
        console.log("UPDATED PRODUCT");
        res.redirect("/admin/products");
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    // .select("title price -_id")
    // .populate("userId", "name")
    .then((products) => {
      console.log(products);
      res.render("admin/products", {
        prods: products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((err) => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return next(new Error("Product not found."));
      }
      fileHelper.deleteFile(product.imageUrl);
      return Product.deleteOne({ _id: prodId, userId: req.user._id });
    })
    .then((result) => {
      return req.user.removeFromCart(prodId);
    })
    .then((result) => {
      console.log("DELETED PRODUCT");
      res.status(200).json({
        message: "Success!",
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Deleting Product Failed" });
    });
};
