const express = require("express");
const { StatusCodes : httpRequest} = require("http-status-codes");
const app = express();

app.use((req, res, next) => {
    res.status(httpRequest.OK).json({
        message : "It Works!"
    });
});

module.exports = app;