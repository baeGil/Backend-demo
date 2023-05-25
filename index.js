const express = require("express");
const bodyparser = require("body-parser");
const { sequelize } = require("./models/sequelize");
const app = express();
const path = require("path");
//const cors = require("cors");

// sync Db
sequelize
  .sync({ force: false })
  .then((result) => {
    console.log(result.models);
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// CRUD routes
app.use("/brands", require("./routes/brand"));

//error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

app.listen(3000, () => {
  console.log("runing at port 3000");
});

// sequelize.sync({ force: true }).then(console.log("Successfully!"));
// const port = 8080;
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
