const Post = require("../models/Post");

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.user.id
  });
  res.json(post);
};

exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (post.likes.includes(req.user.id)) {
    post.likes.pull(req.user.id);
  } else {
    post.likes.push(req.user.id);
  }

  await post.save();
  res.json(post);
};
