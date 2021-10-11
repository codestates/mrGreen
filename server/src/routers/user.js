const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const edit = require("../controllers/edit");


// * POST //logIn
router.post("/login", authController.signIn);

// * POST /signUp
router.post("/signup", authController.signUp);

// * POST //logout
router.post("/logout", authController.logout);

// * GET /user/userinfo
router.get("/userinfo", userController.userInfo);

// * PATCH /user/userEdit
router.patch("/useredit", edit.userEdit);

module.exports = router;