const Express  = require( "express");
const router = Express.Router()

const usersController = require("../controllers/users.controllers")
router.get("/get-users",usersController.getUsers) 

module.exports = router
