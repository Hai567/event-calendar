let express = require("express")
let route = express.Router()
let getRequestController = require("../app/controllers/getRequestController")
let postRequestController = require("../app/controllers/postRequestController")

route.get("/super-users/all-users", getRequestController.allUsers)
route.post("/user/auth/sign-in", postRequestController.signIn)
route.post("/user/auth/sign-up", postRequestController.signUp)


module.exports = route