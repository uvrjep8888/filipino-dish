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

	console.log("starting to getfoodbyname function ...... ")
	const name = req.query.name;
	const foods = await fetchEntry(); 	
	console.log("name-value", name)
	console.log("getting the variable value ..... ")
	const result = foods[0].filter((food) => {
		console.log('id', food.name)
		console.log('food', food.name.toLowerCase().includes(name.toLowerCase()))
		return food.name.toLowerCase().includes(name.toLowerCase())
	})

	console.log("consoling the result ")

	console.log("result", result)

	res.send(result)

}
