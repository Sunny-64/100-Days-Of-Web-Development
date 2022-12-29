require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const flash = require("express-flash");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require('mongoose-findorcreate')


const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());

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
  username: { type: String },
  password: { type: String },
  googleId : {type : String}
});

const secretsModel = new mongoose.Schema({
  secret : {type : String}, 
  userId : {type : mongoose.Schema.Types.ObjectId}
})


userModal.plugin(passportLocalMongoose);
userModal.plugin(findOrCreate);


// user model
const User = new mongoose.model("User", userModal);
// secretsModal
const Secret = new mongoose.model("Secret", secretsModel);
// use static authenticate method of model in LocalStrategy
// passport.use(new LocalStrategy(User.authenticate()));
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// passport.serializeUser((User, done) => {
//   done(null, User.username);
// });
// passport.deserializeUser((User, done) => {
//   done(null, User.username);
// });


passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, {userId: user.id });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});


passport.use(
  new GoogleStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(profile)
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      User.findOrCreate({ username: profile.displayName, googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    })
);

// Routes
app.get("/", (req, res) => {
  // console.log(process.env.API_KEY);
  res.render("home");
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));


app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect('/secrets');
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/submit", (req, res)=>{
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
})

app.get("/secrets", (req, res) => {
  // if (req.isAuthenticated()) {
  //   Secret.find({}).then(data=>{console.log(data)}).catch(err => console.log(err));
    
  //   res.render("secrets");
  // } else {
  //   res.redirect("/login");
  // }
    Secret.find({})
    .then(data=>res.render("secrets", {secrets : data}))
    .catch(err => {
      console.log(err) 
      res.redirect("/");
    });

});

app.post("/register", (req, res) => {
  User.register(
    { username: req.body.username },
    req.body.password,
    function (err) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, () => {
          res.redirect("/secrets");
        });
      }
    }
  );
});


app.post("/submit", (req, res)=>{
  // console.log(req.user.userId);
  
  const newSecret = new Secret({
    secret : req.body.secret, 
    userId : req.user.userId
  }); 

  newSecret.save()
  .then(resolve=>{
    res.redirect("/secrets");
  })
  .catch(err=>{
    console.log("Error while saving ", err); 
    res.redirect("/submit");
  })
})

app.post("/login", (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });



  req.login(user, (err) => {
    if (err) {
      console.log(err);
      // res.redirect("register");
    } else {
      passport.authenticate("local")(req, res, () => {
        // console.log("logged in");
        res.redirect("/secrets");
      });
    }
  });
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/");
    }
  });
});

app.listen(3000, function () {
  console.log("Server running at PORT : 3000");
  // console.log("visit http://localhost:3000");
});
