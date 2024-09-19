// require('dotenv').config({ path: '../../.env' });
require('dotenv').config({path:__dirname+'/./../../../.env'});

module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'anjay-gacor-kang',
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  database: {
    dialect: process.env.DB_DIALECT || 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'template',
  },
  mongo: {
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/template',
  },
  development: {
    username: process.env.SQL_USERNAME || 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DATABASE || 'template',
    host: process.env.SQL_HOST || 'localhost',
    port: process.env.SQL_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  },
  test: {
    username: process.env.SQL_USERNAME || 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DATABASE || 'template',
    host: process.env.SQL_HOST || 'localhost',
    port: process.env.SQL_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  },
  production: {
    username: process.env.SQL_USERNAME || 'root',
    password: process.env.SQL_PASSWORD || 'root',
    database: process.env.SQL_DATABASE || 'template',
    host: process.env.SQL_HOST || 'localhost',
    port: process.env.SQL_PORT || 3306,
    dialect: process.env.DB_DIALECT || 'mysql',
    logging: false,
  }
};
