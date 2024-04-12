const mongoose = require('mongoose');
 
mongoose.connect("mongodb://127.0.0.1:27017/Data-asociation")


// Define the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  posts: [{
    
  }],
  dp: {
    type: String,
    // Default display picture
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  }
});


// Create the User model
module.exports = mongoose.model('User', userSchema);


