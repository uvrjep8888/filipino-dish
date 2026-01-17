const express = require("express");
const app = express();

// const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Filipino Dish app");
});

app.use(express.json());

const entryRoutes = require("./routes/entryRoutes");

app.use("/api/entries", entryRoutes);

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});

module.exports = app;
