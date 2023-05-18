require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const { Foods } = require('./models')
const seededDataFood = require('./models/seedDataFood')


app.get ('/', (req, res) => {
    res.send("CIAO LIZZ")
})

app.get('/seed', async (req, res, next) => {
    try{
        await Foods.deleteMany({});
        await Foods.insertMany(seededDataFood);
        res.redirect('/')
    } catch(err) {
        console.log(err);
        next();
    }
})

app.listen(process.env.PORT, () =>
    console.log(`🍎Server is listening to PORT: ${process.env.PORT}🥑`)
)