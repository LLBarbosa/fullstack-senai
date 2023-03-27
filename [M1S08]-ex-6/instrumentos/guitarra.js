const Sequelize = require('sequelize');
const database = require('./db');
const Guitarra = database.define('guitarra', {
    // Criando tabela [M1S08] Ex 6 - OMR Sequelize
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },

    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },

    ano: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    cor: {
        type: Sequelize.STRING,
        allowNull: false
    },

    país: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

module.exports = Guitarra;
