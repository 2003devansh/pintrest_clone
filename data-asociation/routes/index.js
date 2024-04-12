var express = require('express');
var router = express.Router();
const userModel = require('./users')
const postModel = require("./post")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/createuser' , async function(req,res,next ){
 let createduser = await  userModel.create({
    username: "devansh" ,
    password: "Devu",
    posts: [] ,
    email: "devansh@email.com",
    fullName: "Devansh faujdar "
   })
   res.send(createduser)
})

module.exports = router;
