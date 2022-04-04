const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.json({version: "0.2.3"})
})

module.exports = app;
