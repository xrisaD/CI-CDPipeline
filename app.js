const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.json({version: "8.0.6"})
})

module.exports = app;
