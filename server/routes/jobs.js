import express from 'express';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// In-memory job storage (replace with database in production)
let jobs = [];

// Get all jobs
router.get('/', async (req, res) => {
  res.json(jobs);
});

// Create new job (protected route)
router.post('/', verifyToken, async (req, res) => {
  try {
    const job = {
      id: jobs.length + 1,
      ...req.body,
      createdAt: new Date(),
      userId: req.user.id
    };

    jobs.push(job);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job post' });
  }
});

// Update job (protected route)
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const jobId = parseInt(req.params.id);
    const jobIndex = jobs.findIndex(job => job.id === jobId);

    if (jobIndex === -1) {
      return res.status(404).json({ message: 'Job not found' });
    }

    jobs[jobIndex] = {
      ...jobs[jobIndex],
      ...req.body,
      updatedAt: new Date()
    };

    res.json(jobs[jobIndex]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job post' });
  }
});

// Delete job (protected route)
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const jobId = parseInt(req.params.id);
    jobs = jobs.filter(job => job.id !== jobId);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job post' });
  }
});

export default router;