// import mongoose
const mongoose = require("mongoose");

// define schema
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
});

// export schema
module.exports = mongose.module("Like", likeSchema);
