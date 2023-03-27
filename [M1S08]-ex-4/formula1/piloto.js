
const Sequelize = require('sequelize');
const database = require('./db');
const Piloto = database.define('piloto', {
    // Criando atributos da tabela piloto
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false

    },

    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    idade: {
        type: Sequelize.INTEGER,
        allowNull: false

    },

    equipe: {
        type: Sequelize.STRING,
        allowNull: false
    },

    nacionalidade: {
        type: Sequelize.STRING,
        allowNull: false
    },


})

module.exports = Piloto;