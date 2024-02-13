var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req,res){
  let userdata = await userModel.create({
    username: "devanshi",
    password:"iamdev",
    posts: [],
    email: "v@gmail.com",
    fullName: "devansh"


  })
  res.send(userdata);
})

router.get('/createpost',async function(req,res){
 let createdpost =  await postModel.create({
    postText: "hello everyone",
    user: "65cbaafb226aeea4d7b91b75"
  });

  let user = await userModel.findOne({ _id: "65cbaafb226aeea4d7b91b75"});
  // this will help us to find the user on the basis of id

  // user ke andar post ek array jisk under humne push kardi iski id
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");

  res.send(createdpost);

})

module.exports = router;
