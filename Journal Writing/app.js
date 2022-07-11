// Journal app.
const express = require('express'); 
const bodyParser = require('body-parser'); 
const date = require(__dirname + "/date.js"); 
const app = express(); 

app.use(bodyParser.urlencoded({extended : true})); 
app.set('view engine','ejs'); 
app.use(express.static(__dirname + "/public")); 

const journals = []; 
const currentDate = date.getDate(); 
const weekday = date.getWeekday(); 
// test datas 
const dummyTxt = "Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const test1 = {
    date : currentDate + ", " + weekday,
    title : "Test Title 1",
    content : dummyTxt
}
const test2 = {
    date : currentDate + ", " + weekday,
    title : "Test Title 2", 
    content : dummyTxt
}

const test3 = {
    date : currentDate + ", " + weekday,
    title : "Test Title 3", 
    content : dummyTxt
}

journals.push(test1); 
journals.push(test2); 
journals.push(test3); 

// get requests
app.get("/", (req, res) =>{
    res.render('home', {diary : journals}); 
});
app.get("/write", (req, res) =>{
    res.render('write'); 
});
app.get("/edit", (req, res) =>{
    res.render('edit'); 
});

app.get("/search", (req, res) =>{
    res.render('search'); 
});
app.get("/search/:title", (req, res) =>{
    const titlePassed = req.params.title; 
    res.render('journal', {journalsData : journals , titlePassed : titlePassed});
});

// post requests
app.post("/write", (req, res) =>{
    const completeDate = currentDate + ", " + weekday;
    const journal = {
         date : completeDate,
         title : req.body.title,
         content : req.body.journal
    };
    if(journal.title == ""){
        journal.title = "untitled"
    }
    journals.push(journal); 
    res.redirect("/"); 
});

app.listen(3000, ()=>{
    console.log("Server is Running at Port 3000"); 
});