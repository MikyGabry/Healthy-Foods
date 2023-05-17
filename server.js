require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get ('/', (req, res) => {
    res.send("CIAO LIZZ")
})

app.listen(process.env.PORT, () =>
    console.log(`🍎Server is listening to PORT: ${process.env.PORT}🥑`)
)