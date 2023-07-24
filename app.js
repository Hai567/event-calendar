require("dotenv").config()
let express = require("express")
let app = express()
let PORT = process.env.PORT || 3000
let mongoose = require("mongoose")
let bodyParser = require("body-parser")
let session = require("express-session")
let passport = require("passport")

// Connect DB
mongoose.connect(process.env.MONGODB_ATLAS_CONNECTION_URL)
    .then(() => console.log("DB is successfully connected"))
    .catch((err) => {
        console.log("Error encountered while connecting to DB", err)
    })

// Use Session and Passport
app.use(passport.initialize());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // milisec|sec|minute|hour // 1 day
    }
}))

// Middleware
app.use(bodyParser.urlencoded({extended: false}))


let apiRoute = require("./routes/apiRoute")
app.use("/api", apiRoute)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})