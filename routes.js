const routes = require("next-routes");

module.exports = routes()
  .add("home", "/", "index")
  .add("game", "/game/:id", "index");
