const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: []
  },
  user: {
    type: mongoose.Schema.Types.ObjectId
  },
});

module.exports = mongoose.model('Post', postSchema);


