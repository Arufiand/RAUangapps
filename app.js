const express = require("express");
const { StatusCodes : httpRequest} = require("http-status-codes");
const app = express();
const morgan = require("morgan");

const profitRoutes = require('./api/routes/profits');

// Morgan for development and Logging
app.use(morgan('dev'));

app.use('./profits', profitRoutes);

// Error Handling
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = httpRequest.NOT_FOUND;
    next(error); 
})

app.use((error,req,res,next) => {
    res.status(error.status || httpRequest.INTERNAL_SERVER_ERROR);
    res.json({
        error : {
            message : error.message
        }
    })
})



module.exports = app;