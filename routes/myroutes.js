const express = require("express");
const router  = express.Router();
const accountController = require("../controller/accountController");
const todoController = require("../controller/todoController");

router.get("/",accountController.checkauth);
router.get("/login",accountController.showlogin);
router.post("/signin",accountController.signin);
router.post("/create_account",accountController.createAccount);
router.get("/todo",todoController.showTodo);
router.post("/addtodo",todoController.addTodo);
router.post("/deletetodo",todoController.deleteTodo);
router.post("/stattodo",todoController.stattodo);
router.get("/logout",todoController.logout);


module.exports = router;