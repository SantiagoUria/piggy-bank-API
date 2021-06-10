const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b9b3531f73b6ae",
  password: "cfacf22c",
  database: "heroku_e04fcd6f50c88cf",
  dateStrings: true
});
// mysql://b9b3531f73b6ae:cfacf22c@us-cdbr-east-04.cleardb.com/heroku_e04fcd6f50c88cf?reconnect=true

mysqlConnection.connect((err) => {
  err ? console.log(err) : console.log("the database connection was successful");
});

module.exports = mysqlConnection;
