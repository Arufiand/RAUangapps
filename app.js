const express = require("express");
const { StatusCodes : httpRequest} = require("http-status-codes");
const app = express();

const profitRouts = require('./api/routes/profits');

app.use('./produts', productRoutes);

module.exports = app;