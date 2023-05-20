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

router.post('/', async (req, res, next) =>{
    try{
        res.json(await Foods.create(req.body))
    } catch(err) {
        console.log(err)
        next()
    }
})

router.put('/:id', async (req, res, next) => {
    try{
        res.json(await Foods.findByIdAndUpdate(req.params.id, req.body))
    } catch(err) {
        console.log(err)
        next()
    }
})

router.delete('/:id', async (req, res, next) =>{
    try{
        res.json(await Foods.findByIdAndRemove(req.params.id))
    }catch(err){
        console.log(err)
        next()
    }
})


module.exports = router;