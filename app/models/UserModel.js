let mongoose = require("mongoose")
let findThingsOrCreateThings = require("../plugins/findThingsOrCreateThings")
let Schema = mongoose.Schema
let UserSchema = Schema({
    email: String,
    fName: String,
    lName: String, 
    displayName: String,
    avatar: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
    }, 
    city: String,
    loginMethod: String,
    googleId: String,
    facebookId: String,
    hashedPassword: String,
}, { timestamps: true })

UserSchema.plugin(findThingsOrCreateThings)

module.exports = mongoose.model("User", UserSchema)