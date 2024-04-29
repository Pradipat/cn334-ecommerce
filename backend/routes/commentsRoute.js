// commentRoute.js
import express from 'express';
import { comments } from '../models/commentModel.js';
import { spawn } from 'child_process';
import { rejects } from 'assert';
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

router.get('/Polarity/:commentId' ,async (req, res) => {
  try {

    const {commentId} = req.params;
    const commemt = await comments.findById(commentId);
    const pythonProcess = spawn("python", ["python_script/ai4thai.py"]);
    pythonProcess.stdin.write(JSON.stringify(commemt['content']));
    pythonProcess.stdin.end();
    let bufferData = Buffer.alloc(0);
    pythonProcess.stdout.on('data', (data) => {
      bufferData = Buffer.concat([bufferData, data]); // เก็บข้อมูล buffer ที่ได้รับมา
    });
    pythonProcess.stdout.on('end', () => {
      const jsonData = JSON.parse(bufferData.toString()); // แปลง buffer data เป็นข้อมูล JSON
      if(jsonData){
        res.status(200).json("Positive");
      }
      else{
        res.status(200).json("Negative");
      }
    });
    
  
    
  }catch (error) {
    console.error('Error fetching comments:', error);
      res.status(500).json({ message: 'Server error' });
  }
});


export default router;