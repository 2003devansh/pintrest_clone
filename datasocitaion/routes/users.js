const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1:27017/data-associtaion")

const userSchema = new Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String,
    default: 'default_dp.jpg' // Default profile picture
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

module.exports= mongoose.model('User', userSchema);

