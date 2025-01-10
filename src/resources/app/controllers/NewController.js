class NewController {
  index(req, res) {
    try {
      res.render("news");
    } catch (error) {
      console.error("Controller Error:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  show(req, res) {
    res.send("Welcome to the show action");
  }
}

module.exports = new NewController();
