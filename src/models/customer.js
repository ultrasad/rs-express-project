const Sequilize = require('sequelize');
const sequelize = require('../sequelize');

const fields = {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequilize.STRING,
    lastName: Sequilize.STRING
}

const options = {
    timestamps: false,
    //tableName: 'xxx' //overide table name
}

module.exports = sequelize.define('customer', fields, options); //define model