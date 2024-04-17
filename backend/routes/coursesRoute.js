// coursesRoute.js
import express from 'express';
import path from 'path';
import mongoose from 'mongoose'
import { mongoDBURL } from '../config.js';
import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';
import { coureses } from '../models/courseModel.js';

const router = express.Router();
          
cloudinary.config({ 
  cloud_name: 'dheoypevh', 
  api_key: '658458416741846', 
  api_secret: 'AVGWaaW_SFAL0kVqvTxuW67ja2w' 
});

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Temporary upload folder
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });



// Get all Courses
router.get('/', async (req, res) => {
    try {
        const allCourses = await coureses.find({});
        res.status(200).json(allCourses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Course by ID
router.get('/id/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const course = await coureses.findById(courseId);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Courses by Category
router.get('/:categoryName', async (req, res) => {
    try {
        const categoryName = req.params.categoryName;

        // Find courses matching the category
        const courses = await coureses.find({ mainCategory: categoryName }); 

        if (courses.length === 0) {
            return res.status(404).json({ message: 'No courses found in this category' });
        }

        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Courses by Subcategory
router.get('/subcategory/:subCategoryName', async (req, res) => {
    try {
        const subCategoryName = req.params.subCategoryName;

        const courses = await coureses.find({ subCategory: subCategoryName }); 

        if (courses.length === 0) {
            return res.status(404).json({ message: 'No courses found in this subcategory' });
        }

        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create Crouse


// Update Course by Id


// Delete Course and Images


// Update course sold count after checkout
router.post('/updateSoldCount', async (req, res) => {
    try {
        const courseIds = req.body.courseIds; 

        if (!courseIds) {
            return res.status(400).json({ message: 'courseIds are required' });
        }

        // Update soldCount for each course
        const updatedCourses = await Promise.all(courseIds.map(async (courseId) => {
            const course = await coureses.findByIdAndUpdate(
               courseId, 
               { $inc: { soldCount: 1 } }, 
               { new: true } // Return the updated document
            );
            return course; 
        }));

        res.status(200).json(updatedCourses);

    } catch (error) {
        console.error('Error updating sold count:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;

