const express = require("express");
const expValidator = require("express-validator");
const bcrypt = require("bcryptjs");

const check = expValidator.check;
const body = expValidator.body;

const authController = require("../controllers/auth");
const User = require("../models/user");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

router.get("/login", authController.getLogin);

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (!user) {
            return Promise.reject("Email not registered");
          }
        });
      }),
    body("password")
      .trim()
      .custom((value, { req }) => {
        return User.findOne({ email: req.body.email })
          .then((user) => {
            if (user) {
              return bcrypt.compare(value, user.password);
            }
          })
          .then((doMatch) => {
            if (!doMatch) {
              return Promise.reject("Invalid Password");
            }
          });
      }),
  ],
  authController.postLogin
);

router.get("/signup", authController.getSignup);

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail()
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("Email exists already.");
          }
        });
        // if (value === "test@test.com") {
        //   throw new Error("This email address is forbidden");
        // }
        // return true;
      }),
    body(
      "password",
      "Please enter a password with only alphanumeric characters and at least 5 characters"
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords have to match!");
        }
        return true;
      }),
  ],
  authController.postSignup
);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

router.post("/logout", isAuth, authController.postLogout);

module.exports = router;
