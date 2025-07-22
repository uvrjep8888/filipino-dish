const express = require("express")

const {getEntries} = require("../controllers/entryController")


const router = express.Router();

router.get("/", getEntries)

module.exports = router; 
