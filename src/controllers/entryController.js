const { fetchEntry } = require("../services/entryServices");

exports.getEntries = async (req, res) => {
  const entries = await fetchEntry();

  res.json(entries);
};

exports.getFood = async (req, res) => {
  const foods = await fetchEntry();

  const randomIndx = Math.floor(Math.random() * foods[0].length);

  const food = foods[0][randomIndx];

  res.json(food);
};

exports.getFoodsByType = async (req, res) => {
  const { type } = req.params;
  const foods = await fetchEntry();

  const filteredFood = foods[0].filter((food) => {
    return food.type == type;
  });

  res.send(filteredFood);
};

exports.getFoodByName = async (req, res) => {
  const { search } = req.params;
  const foods = await fetchEntry();

  const result = foods[0].filter((food) => {
    return food.name.toLowerCase().includes(search.toLowerCase());
  });

  res.send(result);
};

exports.getFoodByType = async (req, res) => {
  const { type } = req.params;
  const foods = await fetchEntry();

  const filteredFood = foods[0].filter((food) => {
    return food.type == type;
  });

  const randomIndx = Math.floor(Math.random() * filteredFood.length);

  const food = filteredFood[randomIndx];

  res.json(food);
};
