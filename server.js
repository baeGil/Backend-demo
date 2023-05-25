const express = require("express");
//const morgan = require("morgan");
//const { engine } = require("express-handlebars");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");

// import Sequelize
//const { sequelize } = require("./models/sequelize");

// import route from routes folder
//const route = require("./routes");

// import controllers from controllers older
//const controllers = require("./src/app/controllers");

// connect to Db
sequelize.sync({ force: true }).then(console.log("Successfully!"));
const app = express();
const port = 8080;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//HTTP logger
app.use(morgan("combined"));

//template enginess
// app.engine(
//   "hbs",
//   engine({
//     extname: ".hbs",
//   })
// );

// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "resources", "views"));

// use the function route in index file
//route(app);

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
