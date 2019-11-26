const Sequilize = require('sequelize');
const sequelize = require('../sequelize');

const fields = {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoryId: Sequilize.INTEGER,
    productNameEn: Sequilize.STRING,
    productNameTh: Sequilize.STRING,
    //productNameTh: Sequilize.STRING,
}

const options = {
    timestamps: false,
    tableName: 'products' //overide table name
}

module.exports = sequelize.define('product', fields, options); //define model