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

/* db with sequelize */

/* const Sequelize = require('sequelize');
const connectionString = 'mysql://root@localhost/workshop';

const sequelize = new Sequelize(connectionString);

sequelize.authenticate()
.then(() => {
    console.log('Connect... OK');
}); */

/* db */

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

//middleware, get request from form/json
//use before part of form request, (/api/) **use this
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//user, auto create models to database
//run once
//require('./models/user').sync();
//require('./models/user').sync({force: true}); //force: true => drop table and re create, case edit model structure

//JWT
//const jwt = require('./middlewares/jwt');

//router
//app.use(require('./routes/customer'));
//app.use(require('./routes/product'));

//app.use('/api/products', require('./routes/product'));
//app.use(require('./routes/customer'));

//JWT
const middlewaresJWT = require('./middlewares/jwt');

app.use('/api/users', require('./routes/user'));
app.use('/api', require('./routes/auth'));

app.use('/api/products', middlewaresJWT.checkToken, require('./routes/product'));
app.use('/api/customers', middlewaresJWT.checkToken, require('./routes/customer'));

console.log(process.env.PORT);
app.listen(process.env.PORT);