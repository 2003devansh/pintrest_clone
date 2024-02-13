const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true
  },
  user:{
   type: mongoose.Schema.Types.ObjectId,
   // its an id of the model

   ref : 'user'
   // its an the refrence from which we are taken the id
   //  in this case its from the  user model
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: [],
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
