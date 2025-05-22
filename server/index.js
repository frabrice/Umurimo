import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import jobRoutes from './routes/jobs.js';
import blogRoutes from './routes/blog.js';
import { verifyToken } from './middleware/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/blog', blogRoutes);

// Protected route example
app.get('/api/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});