const express = require("express");

const {
  getEntries,
  getFood,
  getFoodsByType,
  getFoodByType,
  getFoodByName,
  buildWeeklyMealPlan,
} = require("../controllers/entryController");

const router = express.Router();

router.get("/", getEntries);
router.get("/food", getFood);
router.get("/food/:search", getFoodByName);
router.get("/foods/:type", getFoodsByType);
router.get("/food/:type", getFoodByType);
router.get("/build", buildWeeklyMealPlan);

module.exports = router;
