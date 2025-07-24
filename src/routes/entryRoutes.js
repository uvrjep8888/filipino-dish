const express = require("express")

const {getEntries, getFood} = require("../controllers/entryController")


const router = express.Router();

router.get("/", getEntries)
router.get("/food", getFood)

module.exports = router; 
