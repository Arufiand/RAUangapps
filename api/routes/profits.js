const express = require("express");
const { StatusCodes : code} = require("http-status-codes");
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(code.OK).json({
        message : 'Handling Get Request to /profits'
    })
})

router.post('/',(req,res,next) => {
    res.status(code.OK).json({
        message : 'Handling Post Request to /profits'
    })
})

module.exports = router;