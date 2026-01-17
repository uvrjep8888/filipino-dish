const express = require("express");

const { getEntries, getFood, getFoodsByType, getFoodByType, getFoodByName } = require("../controllers/entryController");

const router = express.Router();

router.get("/", getEntries);
router.get("/food", getFood);
router.get("/food/:search", getFoodByName);
router.get("/foods/:type", getFoodsByType);
router.get("/food/:type", getFoodByType);

module.exports = router;
