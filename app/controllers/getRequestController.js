let UserModel = require("../models/UserModel")

class getRequestController {
    async allUsers(req, res, next) {
        UserModel.find()
            .then(users => res.json(users))
    }
}

module.exports = new getRequestController