const Sequelize = require('sequelize');
const database = require('./db');
const Atleta = database.define('atleta', {
// Criando tabela [M1S08] Ex 5 - OMR Sequelize
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

    posicao: {
        type: Sequelize.STRING,
        allowNull: false
    },

    equipe: {
        type: Sequelize.STRING,
        allowNull: false
    },

    estado_equipe: {
        type: Sequelize.CHAR(2),
        allowNull: false

    }


})

module.exports = Atleta;