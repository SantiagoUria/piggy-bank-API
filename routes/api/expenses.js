let express = require("express");
let router = express.Router();

const apiExpensesController = require("../../controller/api/apiExpenseController");

router.get("/", apiExpensesController.getList);
router.post("/", apiExpensesController.addExpense);
router.put("/id?", apiExpensesController.editExpense);
router.delete("/id?", apiExpensesController.deleteExpense);

module.exports = router;
