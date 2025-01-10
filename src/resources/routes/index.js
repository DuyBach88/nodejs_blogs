const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  try {
    app.use("/news", newsRouter);
    app.use("/search", siteRouter);
    app.use("/", siteRouter);
  } catch (err) {
    console.error("Route setup error:", err);
    throw err;
  }
}

module.exports = route;
