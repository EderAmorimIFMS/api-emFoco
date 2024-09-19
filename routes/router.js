const express = require("express");
const routes = express.Router()

// Foco router
const focosRouter = require("./focos");
routes.use("/", focosRouter);

module.exports = routes;

