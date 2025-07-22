const {fetchEntry} = require("../services/entryServices");

exports.getEntries = async (req, res) => {
	const entries = await fetchEntry(); 

	res.json(entries)
}


exports.getFood = async (req, res) => {
	const foods = await fetchEntry(); 

	const randomIndx = Math.floor(Math.random() * foods[0].length)

	const food = foods[0][randomIndx]

	res.json(food)
}
