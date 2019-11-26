const express = require('express');
const router = express.Router();

//const sequelize = require('../sequelize'); //raw query

const Customer = require('../models/customer'); //from model
console.log("customer model => ", Customer);



//router.get('/api/customers', async(req, res) => {
    router.get('/', async(req, res) => {
    try {
        
        const customer = await Customer.findAll();
        res.json(customer);

    } catch ({message}) {
        res.json({message});
    }
});

/* router.get('/api/customers', (req, res) => {
    const sql = `SELECT * FROM customers LIMIT 10`;

    sequelize.query(sql, {type: 'SELECT'}) //type SELECT for return only select data
    .then(customers => {
        res.json(customers);
    })
    .catch(err => {
        res.json({message: err.message});
    });

    //res.json([]);
}); */

//router.get('/api/customers/:id', async (req, res) => {
router.get('/:id', async (req, res) => {

    try {

        const { id = 0} = req.params;
        const customer = await Customer.findByPk(id);

        if(customer){
            res.json(customer);
        } else {
            res.status(404).end();
        }

    /* const id = req.params.id;

    const sql = `SELECT * FROM customers WHERE id = ${id} LIMIT 1`;

    sequelize.query(sql, {type: 'SELECT'}) //type SELECT for return only select data
    .then(customers => {
        console.log(customers);
        if(customers.length > 0){
            res.json(customers[0]); //return object
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.json({message: err.message});
    }); */

    } catch ({message}){
        res.json(message);
    }

    //res.json({id: id});
});

//router.post('/api/customers', async (req, res) => {
router.post('/', async (req, res) => {

    try {

        const customer = req.body || {};
        const c = await Customer.create(customer);

        res.json(c);

    } catch ({message}) {
        res.json(message);
    }

    //const customer = req.body || {};
    //res.json(customer);
});

//router.delete('/api/customers/:id', async (req, res) => {
router.delete('/api/customers/:id', async (req, res) => {

    try {

        const { id = 0} = req.params;
        const customer = await Customer.findByPk(id);

        if(customer){

            const c = await customer.destroy();
            res.json(c);
            
        } else {
            res.status(404).end();
        }

    } catch ({message}){
        res.json(message);
    }

});

router.put('/api/customers/:id', async (req, res) => {

    try {

        const { id = 0} = req.params;
        const customer = await Customer.findByPk(id);

        if (!customer) res.status(404).end();

        const updateCustomer = req.body;
        await customer.update(updateCustomer);

        res.json(customer);

        /* if(customer){

            const c = await customer.destroy();
            res.json(c);
            
        } else {
            res.status(404).end();
        } */

    } catch ({message}){
        res.json(message);
    }

});

/* router.get('/api/customers/:id', (req, res) => {
    const id = req.params.id;

    const sql = `SELECT * FROM customers WHERE id = ${id} LIMIT 1`;

    sequelize.query(sql, {type: 'SELECT'}) //type SELECT for return only select data
    .then(customers => {
        console.log(customers);
        if(customers.length > 0){
            res.json(customers[0]); //return object
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.json({message: err.message});
    });

    //res.json({id: id});
}); */

module.exports = router;