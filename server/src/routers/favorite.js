const express = require("express");
const router = express.Router();
const favorite = require("../controllers/favorite");

router.post("/:id", favorite.addFavorite);
router.get("/", favorite.getFavorite);
router.delete("/:id", favorite.deleteFavorite);

module.exports = router;
