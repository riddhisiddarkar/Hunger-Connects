const express = require("express");
const mongoose = require("mongoose");
const app = express();
const session = require("express-session");
const port = 5000 || process.env.PORT;
const user = require("./routes/user");
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
//connecting to mongodb
mongoose.connect('mongodb://localhost/hungerconnects', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Successfully connected to mongo db");
}).catch(err => {
    console.log("There is an error here in connecting to the database");
    console.log(err);
});

//cors errors
app.use(cors());

//body parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());

// setting user routes
app.use("/user", user);
// app.post("/user/register", (req, res) => {
//     console.log(req.body)
//     console.log("called")
// })
//listening on the port
app.listen(port, (err) => {
    if (err) {
        console.log("There is an error here in hosting on port");
        console.log(err);
    }
    console.log(`Listing on port ${port}`);
})