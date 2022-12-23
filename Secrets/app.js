require("dotenv").config(); 
const express = require("express"); 
const bodyParser = require("body-parser"); 
const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt");

// Database Connectivity
mongoose.set('strictQuery', false); // Overrides the Deprecation warning 

mongoose.connect("mongodb://0.0.0.0:27017/secrets")
.then(resolve=>{
    console.log("Database connected successfully");
})
.catch(err=>{
    console.log("There was an Error while connecting to Database"); 
}); 

// User schema
const userModal = new mongoose.Schema({
    email : {type : String},
    password : {type : String}
}); 

// user model
const User = new mongoose.model("User", userModal); 


const app = express(); 
app.use(express.static(__dirname + "/public")); 
app.set("view engine", "ejs"); 
app.use(bodyParser.urlencoded({extended : true})); 


// Routes
app.get("/", (req, res)=>{
    // console.log(process.env.API_KEY); 
    res.render("home");
})

app.get("/register", (req,res)=>{
    res.render("register"); 
}); 

app.post("/register", (req, res)=>{
    const {email , password} = req.body; 

    // user object
    const userObj = new User(); 
    userObj.email = email; 
    console.log(email); 

    //password encryption
    userObj.password = bcrypt.hashSync(password, 10); 

    // Save User
    userObj.save().
    then(data =>{
        console.log(data); 
        res.redirect("login");
    }).catch(err=>{
        console.log(err); 
        res.redirect("/")
    }); 
})

app.get("/login", (req, res)=>{
    res.render("login"); 
}); 

app.post("/login", (req, res)=>{
    const {email, password} = req.body; 
    User.findOne({email : email})
    .then(data=>{
        if(data != null){
            if(bcrypt.compareSync(password, data.password)){
                res.redirect("secrets"); 
            }
            else{
                res.redirect("/"); 
            }
        }
    }).catch(err=>{
        console.log(err); 
        res.redirect("/"); 
    })

})

app.listen(3000, function(){
    console.log("Server running at PORT : 3000"); 
    // console.log("visit http://localhost:3000"); 
})