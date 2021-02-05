// environment vars dontenv

// imports
const express = require("express")
const ejsLayouts = require("express-ejs-layouts")
// set up middleware
const app = express()
app.set("view engine", "ejs")
app.use(ejsLayouts)

// app.use(() => {
//     console.log("hey")

// })

// this will let us access css js, anything in public directory
// <link href="/css/styles.css" rel="text/stylesheet" />
app.use(express.static(__dirname + '/public/'));

// routes
app.get("/", (req, res) => {
    res.render("index")
})


// controllers



// port and listen

app.listen(8000, console.log("running"))