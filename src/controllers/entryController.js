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

exports.buildWeeklyMealPlan = async (req, res) => {
  const foods = await fetchEntry();

  const mealType = {
    chicken: 0,
    pork: 0,
    seafood: 0,
    vegetable: 0,
  };

  const maxChicken = 2;
  const maxPork = 2;
  const maxSeafood = 2;
  const maxVegetable = 0;

  let mealPlan = [];

  let collection = [];
  let newMeal = [];

  Array.from({ length: foods[0].length }).forEach((element) => {
    const filtered = foods[0].filter((food) => food.type);
    const randomItem = filtered[Math.floor(Math.random() * foods[0].length)];
    if (!foods[0].length) return null;

    if (!collection.includes(randomItem.id)) {
      collection.push(randomItem.id);
      newMeal.push(randomItem);
    }
  });

  newMeal.filter((food, index) => {
    if (food.type == "chicken" && mealType.chicken != maxChicken) {
      mealPlan.push(food);
      mealType.chicken += 1;
    }

    if (food.type == "pork" && mealType.pork != maxPork) {
      mealPlan.push(food);
      mealType.pork += 1;
    }

    if (food.type == "seafood" && mealType.seafood != maxSeafood) {
      mealPlan.push(food);
      mealType.seafood += 1;
    }

    if (food.type == "vegetable" && mealType.vegetable != maxVegetable) {
      mealPlan.push(food);
      mealType.vegetable += 1;
    }
  });

  res.json(mealPlan);
};
