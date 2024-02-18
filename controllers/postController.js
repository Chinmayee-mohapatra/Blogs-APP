// import models
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    // save()
    const { title, body } = req.body;

    const postObject = new Post({
      title,
      body,
    });

    const savedPost = await postObject.save();

    res.json({
      post: savedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
      message: "Error while creating post.",
    });
  }
};

exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();

    res.json({
      posts,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while creating post.",
    });
  }
};
