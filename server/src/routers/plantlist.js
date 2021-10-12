const express = require("express");
const router = express.Router();
const plant = require("../controllers/plant");

router.get("/", plant.plantList);

module.exports = router;
