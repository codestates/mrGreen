const express = require("express");
const router = express.Router();
const myList = require("../controllers/plant");
const favorite = require("../controllers/favorite");

// router.get("/favorite", favorite.getFavorite);
router.post("/", favorite.addFavorite);
router.delete("/", favorite.deleteFavorite);

module.exports = router;
