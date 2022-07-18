// Journal app.
const express = require('express'); 
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js"); 
const mongoose = require("mongoose"); 
const app = express(); 

app.use(bodyParser.urlencoded({extended : true})); 
app.set('view engine','ejs'); 
app.use(express.static(__dirname + "/public")); 

// const journals = []; 
const currentDate = date.getDate(); 
const weekday = date.getWeekday(); 

// Database 

mongoose.connect('mongodb://localhost:27017/journalDB');
const journalSchema = new mongoose.Schema({
    date : String, 
    title : String, 
    content : String
}); 

const Journal = mongoose.model("Journal", journalSchema); 

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

const testDataArray = [test1, test2, test3]; 



// get requests
app.get("/", (req, res) =>{
    Journal.find({}, (err, result)=>{
        if(result.length == 0){
            Journal.insertMany(testDataArray, (err)=>{
                if(err){
                    console.log("Something went Wrong!!!!"); 
                }
                else{
                    console.log("Successfully inserted");
                }
                res.redirect("/"); 
            });             
        }else{
            res.render('home', {diary : result});
        }                 
    }); 
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
    // res.render('journal', {journalsData : journals , titlePassed : titlePassed});
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
    // journals.push(journal); 
    // db.journalDatabase(journal); 
    const item = new Journal(journal); 
    item.save(); 
    res.redirect("/"); 
});

app.listen(3000, ()=>{
    console.log("Server is Running at Port 3000"); 
});

// Database (gotta shift it to other file later...)
// declaring the schema globaly due to overwrite issues.


