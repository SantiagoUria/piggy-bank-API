const mysqlConnection = require("../../database");

module.exports = {
  getList: (req, res, next) => {
    const query = `SELECT * FROM expense_items AS items
     INNER JOIN expense_categories AS exp_cat
     ON  items.expenseCategories_id = exp_cat.id
     INNER JOIN income_categories AS inc_cat
     ON items.incomeCategories_id = inc_cat.id 
     INNER JOIN expense_types AS exp_types
     ON items.expenseTypes_id = exp_types.id`
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
