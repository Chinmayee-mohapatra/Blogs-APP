const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const likeObject = new Like({
      post,
      user,
    });

    const savedLike = await likeObject.save();
    // update post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error liking post",
    });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete in like collection
    const updatedLike = await Like.findOneAndDelete({
      post: post,
      _id: like,
    });

    // update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { like: updatedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error unliking post",
    });
  }
};

exports.dummyLink = (req, res) => {
  res.send("This is a dummy page.");
};
