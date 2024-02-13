const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pintrestDataBase")

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
  posts: [],
  displayPicture: {
    type: String,
    default: 'default.jpg' // You can set a default display picture
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

module.exports = mongoose.model('User', userSchema);


