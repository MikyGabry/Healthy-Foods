const express = require('express');
const Foods = require('../models/Foods');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        res.json(await Foods.find({}))
    } catch(err) {
        console.log(err)
        next()
    }
})

module.exports = router;