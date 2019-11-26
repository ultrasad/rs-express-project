const Sequilize = require('sequelize');
const sequelize = require('../sequelize');

const fields = {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequilize.STRING,
        unique: true,
    },
    password: Sequilize.STRING,
    role: Sequilize.ENUM('A','U')
    //firstName: Sequilize.STRING,
    //lastName: Sequilize.STRING
}

const options = {
    //timestamps: false,
}

module.exports = sequelize.define('user', fields, options); //define model