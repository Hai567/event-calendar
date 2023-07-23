let UserModel = require("../models/UserModel")
let bcrypt = require("bcrypt")
let passport = require('passport')

class postRequestController {
    async signUp(req, res, next) {
        let {email, fName, lName, displayName, city, password, avatar} = req.body

        UserModel.findOne({email})
            .then(async (user) => {
                if (user){
                    res.json({ message: "Email has been used!" })
                }else{
                    let hashedPassword = await bcrypt.hash(password, 10)
                    UserModel.create({ 
                        email,
                        fName, 
                        lName, 
                        displayName, 
                        city, 
                        hashedPassword,
                        avatar: avatar || undefined
                    })
                        .then(user => res.json({ message: `Successfully created new user`, user }))
                        .catch(err => res.json({ message: `There is some error while creating new user, please check again` }))
                }
            })

    }
    async signIn(req, res, done) {

        let {email, password} = req.body

        UserModel.findOne({ email })
            .then(user => {
                bcrypt.compare(password, user.hashedPassword)
                    .then(authenticated => {
                        if (authenticated){
                            res.json({ message: `Signed In`, user })
                            return done(null, user)
                        }else{
                            res.json({ message: `Wrong Password, try again` })
                            return done(null, false)
                        }
                    })
            })

        // Cookie and Session
        passport.serializeUser((user, done) => {
            return done(null, user)
        })
        passport.deserializeUser((user, done) => {
            UserModel.findOne(user)
                .then(user => {
                    if (user) {
                        return done(null, user)
                    }else{
                        return done(null, false)
                    }
                })
                .catch(err => console.log("Error In localStrategy", err))
        })

    }
}

module.exports = new postRequestController