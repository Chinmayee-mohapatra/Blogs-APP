// import required model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    // create comment --> using create()/save() from mongoose

    // 1. Fetch data from request body
    const { post, user, body } = req.body;

    // 2. create a comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    //3. Save the new comment into the database
    const savedComment = await comment.save();

    // 4. Add the new comment on the comment array of Post Model
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    console.error("Error while creating comment: ", err);
    res.status(500).json({
      error: err,
      message: "Internal server error.",
    });
  }
};
