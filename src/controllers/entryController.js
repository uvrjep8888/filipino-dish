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


exports.getFoodByType = async (req, res) => {
	const {type} = req.params
	const foods = await fetchEntry(); 

	const filteredFood = foods[0].filter((food) => {
		return food.type == type 
	})
	
	res.send(filteredFood)
}

exports.getFoodByName = async (req,res) => {
	const name = req.query.name;
	const foods = await fetchEntry(); 	

	const result = foods[0].filter((food) => {
		return food.name.toLowerCase().includes(name.toLowerCase())
	})

	res.send(result)
}
