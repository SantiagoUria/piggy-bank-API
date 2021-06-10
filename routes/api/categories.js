let express = require("express");
let router = express.Router();

const apiCategoryController = require("../../controller/api/apiCategoryController");

router.get("/", apiCategoryController.getCategories);

module.exports = router;
