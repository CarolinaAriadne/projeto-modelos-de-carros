const msql = require('mysql2/promise');
require('dotenv').config();

const connection = msql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  port: process.env.MYSQL_PORT || '3306',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'dbCarModels',
});

module.exports = connection;
