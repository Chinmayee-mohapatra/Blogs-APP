// import mongoose
const mongoose = require("mongoose");

// define schema
const commentSchema = new mongoose.Schema({
  pose: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

// export schema
module.exports = mongoose.model("Comment", commentSchema);
