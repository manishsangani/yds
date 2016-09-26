
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bhagat2218',
  database : 'qasampark'
});
connection.connect();

var env = process.env.NODE_ENV || 'development';
var configs = require("./config/config." + env);
require('./config/mongoDb')(configs);

var schema = require('./models/userSchema.js');

connection.query('SELECT * from  donation_type', function(err, rows, fields) {
  if (err) throw err;
  
  console.log('The solution is: ', rows[1]);
});

connection.end();

