const Sequelize = require('sequelize');
const connectionString = 'mysql://root@localhost/workshop';

const sequelize = new Sequelize(connectionString);

/* sequelize.authenticate()
.then(() => {
    console.log('Connect... OK');
}); */

module.exports = sequelize;

//golbal valiable