let express = require('express');
const app = require('../../app');
let router = express.Router();

const apiUserController = require('../../controller/api/apiUserController')

router.get("/", apiUserController.getUsers)
// router.delete("/delete/:id", apiUserController.deleteUser)

module.exports = router;

