const express = require("express");
const protect = require("../middleware/authMiddleware");
const { getComments, addComment } = require("../controllers/commentController");

const router = express.Router();

router.get("/:postId", getComments);
router.post("/:postId", protect, addComment);

module.exports = router;
