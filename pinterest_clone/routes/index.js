var express = require('express');
const userModel = require("./users")
const passport = require('passport');
var router = express.Router();


const localStrategy  = require("passport-local") ;
passport.use(new localStrategy(userModel.authenticate()))
// in dono line se user login hota hai 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login',);
});

router.get("/feed" , function(req,res,next){
  res.render('feed')
})

router.post("/login" ,passport.authenticate("local" , {
  successRedirect : "/profile" ,
  failureRedirect: "/" ,

}), function(req,res){
 // agar humne login kara toh hamara banda login ho jayeg a
}) ; 


  router.post("/register" , function(req,res){
    const { username , email , fullname } = req.body ;
    const userData = new userModel({username , email , fullname}) ;

    userModel.register(userData , req.body.password)
    .then(function(){
      passport.authenticate("local")(req,res,function(){
        res.redirect("/profile") ;
      })
      // 1. userModel.register(userData, req.body.password): Assuming userModel is a Mongoose model for managing user data, 
// this line is registering a new user in the database.
// It's calling a method called register on the userModel, passing in userData as the user data (likely obtained from the request body) and req.body.password as the user's password.
// The register method is typically provided by plugins like passport-local-mongoose, which adds authentication-related methods to the user model.

//2>  .then(function() { ... }): This part is a promise chain, indicating that the next action should be taken after the user registration is successfully completed.
//  In other words, it specifies what should happen after the registration process is done.

// 3. passport.authenticate("local")(req, res, function() { ... }): This line is authenticating the user after successful registration. It's using Passport.js's local authentication strategy, which typically verifies a user's credentials against the database.
//  If authentication succeeds, it will invoke the function provided as the third argument.
//   In this case, it's redirecting the user to the "/profile" route.
    })
  })

router.get("/profile" , isLogedIn , function(req,res,next){
  res.send("profile") ;
  // yeh page tab tak nhi khulega jab tak mai loged in nhi ho jata 
})


router.get("/logout" , function(req,res){
  req.logout(function(err){
    if(err){
      return next(err) ;
    }
    res.redirect("/") ; 
  })
})


function isLogedIn(req,res,next){
  if(req.isAuthenticated()) return next() ; 
  res.redirect("/login") ;
}


module.exports = router;
