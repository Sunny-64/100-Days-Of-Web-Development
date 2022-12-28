require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "just some secret code",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Database Connectivity
mongoose.set("strictQuery", false); // Overrides the Deprecation warning

mongoose
  .connect("mongodb://0.0.0.0:27017/secrets")
  .then((resolve) => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("There was an Error while connecting to Database");
  });

// User schema
const userModal = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

userModal.plugin(passportLocalMongoose);

// user model
const User = new mongoose.model("User", userModal);

// use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.get("/", (req, res) => {
  // console.log(process.env.API_KEY);
  res.render("home");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/secrets", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("login");
  }
});

app.post("/register", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err) {
      if (err) {
        console.log(err);
        res.redirect("register");
      } else {
        // const authenticate = User.authenticate();
        // authenticate(req.body.username, req.body.password, (error, result)=>{
        //     if(error){
        //         console.log(error);
        //     }
        // })
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secrets");
        });
      }
    }
  );
});

app.post("/login", (req, res) => {});

app.listen(3000, function () {
  console.log("Server running at PORT : 3000");
  // console.log("visit http://localhost:3000");
});
