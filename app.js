let express = require("express")
let app = express()
let PORT = process.env.PORT || 3000
let mongoose = require("mongoose")
let bodyParser = require("body-parser")

// Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/eventCalendarApp')
    .then(() => console.log("DB is successfully connected"))
    .catch((err) => {
        console.log("Error encountered while connecting to DB", err)
    })

// Middleware
app.use(bodyParser.urlencoded({extended: false}))


let apiRoute = require("./routes/apiRoute")
app.use("/api", apiRoute)




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})