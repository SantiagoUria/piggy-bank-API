const mysqlConnection = require("../../database");

module.exports = {
  getCategories: (req, res, next) => {
    const query = "SELECT * FROM expense_categories";
    mysqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  },
  getCategoryNameById: (req, res) => {
    const id = req.params.id;
    console.log(id);
    const query = `SELECT name FROM expense_categories WHERE id = ${id}`;
    mysqlConnection.query(query, (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  },
};
