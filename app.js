const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.json({version: "0.0.8"})
})

module.exports = app;
