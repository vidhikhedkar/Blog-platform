const Comment = require("../models/Comment");

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username");
  res.json(comments);
};

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    post: req.params.postId,
    user: req.user.id
  });
  res.json(comment);
};
