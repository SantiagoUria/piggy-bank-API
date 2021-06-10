const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b47e102375ae56",
  password: "7409e9c3",
  database: "heroku_2a6a2868cc826c7",
  dateStrings: true
});
// mysql://b47e102375ae56:7409e9c3@us-cdbr-east-04.cleardb.com/heroku_2a6a2868cc826c7?reconnect=true

mysqlConnection.connect((err) => {
  err ? console.log(err) : console.log("the database connection was successful");
});

module.exports = mysqlConnection;
