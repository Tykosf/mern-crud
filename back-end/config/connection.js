const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb'  
});
module.exports = conn;