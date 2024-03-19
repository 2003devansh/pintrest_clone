var express = require('express');
var router = express.Router();
const userModel = require('./users');
const postModle = require('./post');


router.get('/',function(req,res,next){
    res.render('index',{title: 'Express'});
});

router.get('/createuser', async function (req,res,next) {
 let createduser =  await  userModel.create({
        username: "devansh" ,
        password: "Devansh" , 
        posts: [], 
        email : "devansh@email.com", 
        fullName: "devnansh faujdar"
    });

    res.send(createduser);
    
})

router.get('/createpost', async function(req,res,next){
    let createdpost = await postModle.create({
        text: "hello ",

    });
    res.send(createdpost)
})

module.exports = router ; 