const mongoose = require('mongoose');
const plm = require("passport-local-mongoose"); 
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/clone"); 

const userSchema = new Schema({
  username: { type: String, required: true , unique: true},
  email: { type: String, required : true , unique : true},
  password: { type: String},
  fullname: { type: String, required : true },
  posts: [{
     type : mongoose.Schema.Types.ObjectId , 
     ref: "Post"
  }],
  dp: { type: String }, // Assuming dp is a URL pointing to the display picture
  profile: {
      // Additional profile information fields can go here
  }
});
userSchema.plugin(plm) ; 

module.exports = mongoose.model('User', userSchema);


