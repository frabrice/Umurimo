import express from 'express';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// In-memory blog storage (replace with database in production)
let posts = [];

// Get all blog posts
router.get('/', async (req, res) => {
  res.json(posts);
});

// Create new blog post (protected route)
router.post('/', verifyToken, async (req, res) => {
  try {
    const post = {
      id: posts.length + 1,
      ...req.body,
      createdAt: new Date(),
      userId: req.user.id
    };

    posts.push(post);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post' });
  }
});

// Update blog post (protected route)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    posts[postIndex] = {
      ...posts[postIndex],
      ...req.body,
      updatedAt: new Date()
    };

    res.json(posts[postIndex]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post' });
  }
});

// Delete blog post (protected route)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post' });
  }
});

export default router;