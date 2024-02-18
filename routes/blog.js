// import express.Router
const express = require("express");
const router = express.Router();

// import controller
const { dummyLink } = require("../controllers/likeController");
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPost } = require("../controllers/postController");

// mapping routes
router.get("/dummyRoute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);

// export routes
module.exports = router;
