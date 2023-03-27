const Sequelize = require('sequelize');
const USER = "";
const PASSWORD = "";
const sequelize = new Sequelize('Instrumentos', USER, PASSWORD, { // parâmetros (banco de dados, usuário, senha)

    dialect: 'postgres',
    host: 'localhost',
    port: '5432'


});

module.exports = sequelize;

// Configurações para conectar ao PostgreSQL
