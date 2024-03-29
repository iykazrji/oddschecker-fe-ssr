const next = require("next");
const express = require("express");
const routes = require("./routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

// Setup express

app.prepare().then(() => {
  express()
    .use(handler)
    .listen(process.env.PORT || 3000);
});
