// commentRoute.js
import express from 'express';
import { comments } from '../models/commentModel.js';

const router = express.Router();

// Create a new comment
router.post('/', async (req, res) => {
    try {
      const { content, userId, courseId } = req.body;
  
      // Basic validation (You can add more robust validation if needed)
      if (!content || !userId || !courseId) {
        return res.status(400).json({ message: 'Please provide content, userId, and courseId' });
      }
  
      const newComment = new comments({
        content,
        user: userId,
        course: courseId,
      });
  
      const savedComment = await newComment.save();
  
      res.status(201).json(savedComment);
  
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

// Get all comments by course ID
router.get('/course/:courseId', async (req, res) => {
    try {
      const courseId = req.params.courseId;
  
      const courseComments = await comments.find({ course: courseId })
                                           .populate('user');  // Populate user data
  
      res.status(200).json(courseComments); 
  
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

export default router;