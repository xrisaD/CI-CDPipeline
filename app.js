const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.json({version: "99.99.99"})
})

module.exports = app;
