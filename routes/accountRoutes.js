const express = require("express");
const router  = express.Router();
const accountController = require("../controller/accountController");

router.post("/create_account",accountController.createAccount);

module.exports = router;