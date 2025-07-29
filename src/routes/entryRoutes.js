const express = require("express")

const {getEntries, getFood, getFoodByType, getFoodByName} = require("../controllers/entryController")


const router = express.Router();

router.get("/", getEntries)
router.get("/food", getFood)
router.get("/food/search", getFoodByName)
router.get("/food/:type", getFoodByType)

module.exports = router; 
