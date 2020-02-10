var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "host",
  password: "",
  database: "034"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});