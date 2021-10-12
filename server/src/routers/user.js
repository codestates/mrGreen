const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth/authController");

// * POST //logIn
router.post("/login", authController.login);

// * POST /signUp
router.post("/signup", authController.signUp);

// * POST //logout
router.post("/logout", authController.logout);

// * GET /user/userinfo
router.get("/userinfo", authController.userInfo);

// * PATCH /user/userEdit
router.patch("/userinfo", authController.userEdit);

module.exports = router;
