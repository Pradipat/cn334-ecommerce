// myClassRoute.js
import express from 'express';
import { enrollments } from '../models/myClassModel.js';

const router = express.Router();

// Enroll User in a Class
router.post('/', async (req, res) => {
    try {
        const userId = req.body.userId; // Get from authentication middleware
        const courseId = req.body.courseId;

        // Create a new enrollment
        const newEnrollment = new enrollments({
            user: userId,
            course: courseId,
        });
        
        await newEnrollment.save();

        res.status(201).json({ message: 'User enrolled successfully' });
    } catch (error) {
        console.error('Error creating enrollment:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Courses in User's My Class
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        const enrollment = await enrollments.find({ user: userId }).populate('course');

        if (!enrollment) { 
            return res.status(404).json({ message: "User's enrollments not found" });
        }

        // Extract the course details
        const courses = enrollment.map(enrollment => enrollment.course);

        res.status(200).json(courses); 

    } catch (error) {
        console.error('Error fetching user enrollments:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;