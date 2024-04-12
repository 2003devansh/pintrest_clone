const mongoose = require('mongoose');

// Define the schema
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: 0
  }
});

// Create the Post model
module.exports = mongoose.model('Post', postSchema);
