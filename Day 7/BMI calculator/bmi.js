// BMI Calculator..
const express = require("express");
const bodyParser = require("body-parser");
const port = 5000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let w = parseFloat(res.body.w);
    let h = parseFloat(res.body.h);
    let bmi = w / (h * h);
    // res.send("Your BMI index is : " + bmi);
    // console.log(res.body.weight);
    // console.log(res.body.height);
    // console.log(res.body.);

});

app.listen(port, function() {
    console.log("This is PORT " + port);
    console.log("it's some random port");
});