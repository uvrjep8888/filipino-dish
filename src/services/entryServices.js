exports.fetchEntry = async () => {
  return [
    [
      {
        id: 1,
        name: "Adobo Chicken",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2024/04/Filipino-Chicken-Adobo-Recipe-1024x672.jpg",
        type: "chicken",
      },
      {
        id: 2,
        name: "Tinola",
        imagePath: "https://www.foxyfolksy.com/wp-content/uploads/2015/08/chicken-tinola-recipe-1.jpg",
        type: "chicken",
      },
      {
        id: 3,
        name: "Chicken Inasal",
        imagePath:
          "https://panlasangpinoy.com/wp-content/uploads/2026/01/A-batch-of-chicken-inasal-ready-for-serving-730x1053.jpg",
        type: "chicken",
      },
      {
        id: 4,
        name: "Chicken Afritada",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2018/12/Chicken-Afritada-Recipe-Panlasang-Pinoy.jpg",
        type: "chicken",
      },
      {
        id: 5,
        name: "Fried Chicken",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2025/04/Pinoy-Fried-Chicken-Recipe.jpg",
        type: "chicken",
      },
      {
        id: 6,
        name: "Chicken Curry",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2018/10/Filipino-Chicken-Curry.jpg",
        type: "chicken",
      },
      {
        id: 7,
        name: "Chicken Wings",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2024/04/crispy-chicken-wings-horizontal.jpg",
        type: "chicken",
      },
      // 🐖 Pork
      {
        id: 8,
        name: "Adobo Pork",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2009/08/Pork-Adobo-.jpg",
        type: "pork",
      },
      {
        id: 9,
        name: "Sinigang na Baboy",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2022/09/sinigang-na-baboy-730x1095.jpg",
        type: "pork",
      },
      {
        id: 10,
        name: "Menudo",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2009/02/pork-menudo-recipe.jpg",
        type: "pork",
      },
      {
        id: 11,
        name: "Caldereta Baboy",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2018/07/Calderetang-Baboy.jpg",
        type: "pork",
      },
      {
        id: 12,
        name: "Pork Steak",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2011/02/Pork-Steak-Bistek.jpg",
        type: "pork",
      },
      {
        id: 13,
        name: "Pork Chop",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2014/01/Grilled-Pinoy-Pork-Chop.jpg",
        type: "pork",
      },
      {
        id: 14,
        name: "Adobo sa Gata (Pork)",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2018/04/adobong-baboy-sa-gata.jpg",
        type: "pork",
      },
      {
        id: 15,
        name: "Lumpiang Shanghai",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2017/11/Noche-Buena-Lumpiang-Shanghai-1.jpg",
        type: "pork",
      },
      {
        id: 16,
        name: "Giniling",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2015/09/Pork-Giniling-Kaldereta.jpg",
        type: "pork",
      },
      // { id: 17, name: "Tortang Talong", imagePath: "image/tortang_talong", type: "vegetable" },
      // { id: 18, name: "Lechon Kawali", imagePath: "image/lechon_kawali", type: "pork" },
      // { id: 19, name: "Sisig", imagePath: "image/sisig", type: "pork" },
      {
        id: 20,
        name: "Bicol Express",
        imagePath:
          "https://panlasangpinoy.com/wp-content/uploads/2017/04/Spicy-Pork-Bicol-Express-Recipe-Panlasang-Pinoy.jpg",
        type: "pork",
      },
      // 🐄 Beef
      { id: 21, name: "Caldereta Beef", imagePath: "image/caldereta_beef", type: "beef" },
      {
        id: 22,
        name: "Beef Tapa",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2019/03/Beef-kaldereta-recipe-1-730x1095.jpg",
        type: "beef",
      },
      {
        id: 23,
        name: "Nilagang Baka",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2023/04/beef-nilaga-recipe-panlasang-pinoy.jpg",
        type: "beef",
      },
      {
        id: 24,
        name: "Beef Steak",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2023/03/Filipino-Style-Beef-steak-jpg.webp",
        type: "beef",
      },
      // 🐟 Seafood
      {
        id: 25,
        name: "Fish Fillet",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2015/05/Crisp-Tilapia-Sticks_.jpg",
        type: "seafood",
      },
      {
        id: 26,
        name: "Pritong Galunggong",
        imagePath:
          "https://panlasangpinoy.com/wp-content/uploads/2017/08/Fried-Galunggong-with-salted-egg-and-tomato-recipe_.jpg",
        type: "seafood",
      },
      {
        id: 27,
        name: "Sarsiado",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2025/08/Sarciado-fish-on-a-plate.jpg",
        type: "seafood",
      },
      {
        id: 28,
        name: "Buttered Shrimp",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2009/03/garlic-butter-shrimp-1.jpg",
        type: "seafood",
      },
      {
        id: 29,
        name: "Paksiw na Bangus",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2018/08/paksiw-na-bangus.jpg",
        type: "seafood",
      },
      {
        id: 30,
        name: "Tempura",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2010/01/CamaronRebosadoFront.jpg",
        type: "seafood",
      },
      // 🥬 Vegetables
      {
        id: 31,
        name: "Ginataang Kalabasa",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2025/01/Ginataang-Kalabasa-Recipe-730x487.jpg",
        type: "vegetable",
      },
      {
        id: 32,
        name: "Ginisang Repolyo",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2013/12/ginisang-repolyo-1-730x487.jpg",
        type: "vegetable",
      },
      {
        id: 33,
        name: "Bangus Bicol Express",
        imagePath: "https://panlasangpinoy.com/wp-content/uploads/2025/05/Fried-bangus-cooked-in-coconut-milk.jpg",
        type: "seafood",
      },
    ],
  ];
};
