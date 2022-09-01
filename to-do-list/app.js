const express = require('express');
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// global varibales

const items = [];

app.get('/', function (req, res) {
    const day = date.getDate();
    console.log(day);
    res.render("index", { day: day, items: items });
});
app.post("/", function (req, res) {
    const item = req.body.inputTask;
    if (item != "") {
        items.push(item);
    }
    res.redirect("/");
});



app.get("/login", function (req, res) {
   
    res.render("login");
});

app.get("/signup", function (req, res) {
   
    res.render("signup");
});



app.listen(80, function () {
    console.log("Server running at port 80");
});




