// import {
//     ReasonPhrases,
//     SC,
//     getReasonPhrase,
//     getStatusCode,
// } from 'http-status-codes';

const { StatusCodes: SC} = require("http-status-codes")
const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const { v4: uuid } = require("uuid");
const moment = require("moment");

const app = express();
const port = 3000;

const month = moment().format("MMM")
const year = moment().format("YYYY")

app.use(express.json());

app.get("/uang", async (req, res) => {
    try {
        await fs.mkdir(`../DocumentUangapps/data/dashboard/${year}/${month}`, { recursive: true });
    } catch (error) {
        console.log(JSON.stringify(error, null, 2));
        return res.status(SC.BAD_REQUEST).json({ "Messages": "Error while creating folder" })
    }
    return res.status(SC.OK).json({ "Messages": "Folder created" })
})

app.post("/uang", async (req, res) => {
    const id = uuid();
    const body = req.body;

    if (!body.money) {
        return res.status(SC.NOT_FOUND).json({ "Messages": "No Data Found" });
    }

    try {
        const content = await fs.writeFile(`../DocumentUangapps/data/dashboard/${body.year}/${body.month}/${body.date}.json`, JSON.stringify({docID : id, data: body}, null, 2));
        return res.status(SC.OK).json({
            "Messages": "Data has been inserted",
            "Data": body
        });
    } catch (error) {
        return res.status(400).json(error)
    }

})

const writeLogs = async (res) => {
    const body = res;
    await fs.mkdir(`../DocumentUangapps/data/logs`, { recursive: true });
    await fs.writeFile(`../DocumentUangapps/data/logs${moment().format()}.txt`,);
}

app.listen(port, () => { console.log(`API Server is running on ${moment().format('MMMM Do YYYY, h:mm:ss a')}`) })