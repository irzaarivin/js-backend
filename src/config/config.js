require("dotenv").config({ path: "../../.env" });

module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  database: {
    dialect: process.env.DB_DIALECT || "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "password",
    database: process.env.DB_NAME || "koperasi",
  },
  mongo: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/mydatabase",
  },
  development: {
    // "mongo": {
    //     "url": process.env.MONGO_URL,
    //     "database": process.env.MONGO_DATABASE,
    // },
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,:wq
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: mysql,
    logging: false,
  },
  test: {
    mongo_url: process.env.MONGO_URL,
    mongo_database: process.env.MONGO_DATABASE,
    sql_username: process.env.SQL_USERNAME,
    sql_password: process.env.SQL_PASSWORD,
    sql_database: process.env.SQL_DATABASE,
    sql_host: process.env.SQL_HOST,
    sql_dialect: mysql,
    logging: false,
  },
  production: {
    mongo_url: process.env.MONGO_URL,
    mongo_database: process.env.MONGO_DATABASE,
    sql_username: process.env.SQL_USERNAME,
    sql_password: process.env.SQL_PASSWORD,
    sql_database: process.env.SQL_DATABASE,
    sql_host: process.env.SQL_HOST,
    sql_dialect: mysql,
    logging: false,
  },
};
