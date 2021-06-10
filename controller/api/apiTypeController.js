const mysqlConnection = require("../../database");

module.exports = {
  getTypes: (req, res, next) => {
    const query = "SELECT * FROM expense_types"
    mysqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  },
  addExpense: (req, res) => {},
  editExpense: (req, res) => {},
  deleteExpense: (req, res) => {},
};
