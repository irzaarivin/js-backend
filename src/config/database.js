const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.database.database, config.database.username, config.database.password, {
  host: config.database.host,
  dialect: config.database.dialect,
  port: config.database.port,
  logging: config.environment === 'development' ? console.log : false, // Hanya log di environment development
});

module.exports = sequelize;
