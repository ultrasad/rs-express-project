const express = require('express');
const router = express.Router();

//const sequelize = require('../sequelize'); //raw query

const Product = require('../models/product'); //from model

router.get('/', async(req, res) => {
    try {
        
        const product = await Product.findAll();
        res.json(product);

    } catch ({message}) {
        res.json({message});
    }
});

router.get('/:id', async (req, res) => {

    try {

        const { id = 0} = req.params;
        const product = await Product.findByPk(id);

        if(product){
            res.json(product);
        } else {
            res.status(404).end();
        }
    } catch ({message}) {
        res.json(message);

    }
});

/* router.get('/api/products', async(req, res) => {
    try {
        
        const product = await Product.findAll();
        res.json(product);

    } catch ({message}) {
        res.json({message});
    }
});

router.get('/api/products/:id', async (req, res) => {

    try {

        const { id = 0} = req.params;
        const product = await Product.findByPk(id);

        if(product){
            res.json(product);
        } else {
            res.status(404).end();
        }
    } catch ({message}) {
        res.json(message);

    }
}); */

module.exports = router;