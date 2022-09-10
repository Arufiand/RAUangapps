const express = require("express");
const { StatusCodes : code} = require("http-status-codes");
const { routes } = require("../../app");
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
});

routes.get('/:profitId', (req,res,next) => {
    const id = req.params.profitId;
    if (id) {
        res.status(code.OK).json({
            message : 'isi profit id'
        })
    } else {
       res.status(code.NOT_FOUND).json({
        message: "isi jika gagal"
       }) 
    }
})

routes.patch('/:profitId', (req,res,next) => {
    res.status(code.OK).json({
        message : 'Handling patch / update Request to /profits'
    })
})

routes.delete('/:profitId', (req,res,next) => {
    res.status(code.OK).json({
        message : 'Handling Delete Request to /profits'
    })
})

module.exports = router;