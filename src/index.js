const path = require("path"); // Updated import
const express = require("express");
const morgan = require("morgan");

const { engine } = require("express-handlebars"); // Updated import
const { log } = require("console");
const app = express();
const port = 3000;

const route = require("./resources/routes/index"); // Updated path

// HTTP logger
// app.use(morgan("combined"));

app.use(express.urlencoded({ extended: true })); // Middleware to parse POST request
app.use(express.static(path.join(__dirname, "public"))); // Updated path
// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
); // Use `engine` from express-handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views")); // Updated path
// Routes
route(app);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
