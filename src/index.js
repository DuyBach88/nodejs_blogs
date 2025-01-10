const path = require("path"); // Updated import
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars"); // Updated import
const { log } = require("console");
const app = express();
const port = 3000;

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
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(`query`, {
    query: req.query.name,
    url: req.url,
    method: req.method,
  });
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(`body`, req.body);
  res.send("");
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
