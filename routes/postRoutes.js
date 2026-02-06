const express = require("express");
const protect = require("../middleware/authMiddleware");
const { getPosts, createPost, likePost } = require("../controllers/postController");

const router = express.Router();

router.get("/", getPosts);
router.post("/", protect, createPost);
router.post("/:id/like", protect, likePost);

module.exports = router;
