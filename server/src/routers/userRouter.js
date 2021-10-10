const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const checkToken = require("../token");

router.use(token);

// * GET /user/userinfo
router.get("/userinfo", userController.userInfo);

// * PATCH /user/userEdit
router.patch("/useredit", userController.userEdit);

module.exports = router;