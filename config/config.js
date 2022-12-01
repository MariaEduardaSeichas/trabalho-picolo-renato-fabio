require('dotenv/config');

module.exports = {
  development: {
    username: process.env.db_USERNAME,
    password: process.env.db_PASSWORD,
    database: process.env.db_DATABASE,
    host: process.env.db_HOST,
    port: process.env.db_PORT,
    dialect: process.env.db_DIALECT
  },

  test: {
    username: process.env.db_USERNAME,
    password: process.env.db_PASSWORD,
    database: process.env.db_DATABASE,
    host: process.env.db_HOST,
    port: process.env.db_PORT,
    dialect: process.env.db_DIALECT
  },
  
  production: {
    username: process.env.db_USERNAME,
    password: process.env.db_PASSWORD,
    database: process.env.db_DATABASE,
    host: process.env.db_HOST,
    port: process.env.db_PORT,
    dialect: process.env.db_DIALECT
  }
}