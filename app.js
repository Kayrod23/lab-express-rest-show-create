const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("welcome to the captain's log");
})

app.get("*", (req, res) => {
    res.status(404).send("Error")
})

module.exports = app; 