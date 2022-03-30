import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({version: "0.0.0"})
})

export default app