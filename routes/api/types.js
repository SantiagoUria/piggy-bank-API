let express = require("express");
let router = express.Router();

const apiTypesController = require("../../controller/api/apiTypeController");

router.get("/", apiTypesController.getTypes);

module.exports = router;
