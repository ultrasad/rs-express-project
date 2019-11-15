//console.log('express');

const express = require('express');
const swig = require('swig');
const path = require('path');

const customers = require('./customer.json');

const app = express();

app.set('view engine', 'swig');
app.engine('swig', swig.renderFile);
app.set('views', path.resolve(__dirname, 'views'));

console.log("dirname:", __dirname);

app.use(express.static('public')); //middleware to public path

app.get('/', (req, res) => {
    //res.send("<h1>Hello Express !!</h1>");
    console.log('customers => ', customers);
    //res.render('index.swig');
    res.send('OK...');
});

app.get('/about', (req, res) => {
    //res.send("<h1>About Express !!</h1>");
    res.render('about.swig');
});

app.get('/customer', (req, res) => {
    //res.send("<h1>About Express !!</h1>");
    res.render('customers/index.swig', { customers: customers });
});

console.log(process.env.PORT);
app.listen(process.env.PORT);