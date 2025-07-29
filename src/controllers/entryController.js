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
	const test = "adobo";
	// console.log("tester", String(test).trim().toLowerCase().includes(String(name).trim().toLowerCase()))

	// console.log("name type", typeof name)
	// console.log("test type", typeof test)
	
	const safeTest = String(test).trim().toLowerCase();
	const safeName = String(name).trim().toLowerCase();

	console.log("Raw Values =>", { test, name });
	console.log("Processed =>", { safeTest, safeName });
	console.log("Result =>", safeTest.includes(safeName));


	const result = foods[0].filter((food) => {
		return food.name.toLowerCase().includes(name.toLowerCase())
	})



	res.send(result)

}
