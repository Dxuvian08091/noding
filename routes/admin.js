const path = require("path");

const adminController = require("../controllers/admin");
const { check, body } = require("express-validator");

const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

router.get("/add-product", isAuth, adminController.getAddProduct);

router.get("/products", isAuth, adminController.getProducts);

router.post(
  "/add-product",
  [
    body("title").notEmpty().withMessage("Product must have title").trim(),
    // body("imageUrl", "Product must have valid Image URL")
    //   .notEmpty()
    //   .isURL()
    //   .trim(),
    body("price", "Product Price must be valid")
      .notEmpty()
      .isNumeric()
      .trim()
      .custom((value, { req }) => {
        if (value <= 0) {
          throw new Error("Products price should be greater than zero");
        }
        return true;
      }),
    body("description", "Enter product description").notEmpty().trim(),
  ],
  isAuth,
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  [
    body("title").notEmpty().withMessage("Product must have title").trim(),
    // body("imageUrl", "Product must have valid Image URL")
    //   .notEmpty()
    //   .isURL()
    //   .trim(),
    body("price", "Product Price must be valid")
      .notEmpty()
      .isFloat()
      .trim()
      .custom((value, { req }) => {
        if (value <= 0) {
          throw new Error("Products price should be greater than zero");
        }
        return true;
      }),
    body("description", "Enter product description").notEmpty().trim(),
  ],
  isAuth,
  adminController.postEditProduct
);

router.delete("/product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
