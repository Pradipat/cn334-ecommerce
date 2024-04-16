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
router.post('/', upload.fields([
    { name: 'thumbnailImage', maxCount: 1 }, 
    { name: 'backgroundImage', maxCount: 1 }
]), async (req, res) => {
    try {
        // ... get course details
        const newCourse = new coureses({ 
            ...req.body // Form data
        });

        const savedCourse = await newCourse.save(); // Save in the database first

        const promises = []; // Store our upload promises

        if (req.files.thumbnailImage) {
            promises.push(cloudinary.uploader.upload(req.files.thumbnailImage[0].path, {
                public_id: `${savedCourse._id}-thumbnail`, // Use course ID and indicate thumbnail
                overwrite: true // Allow overwriting if a file with that name exists
            }));
          }
  
          if (req.files.backgroundImage) {
            promises.push(cloudinary.uploader.upload(req.files.backgroundImage[0].path, {
                public_id: `${savedCourse._id}-background`, // Use course ID and indicate background
                overwrite: true
            }));
          }

        const uploadResults = await Promise.all(promises);

        // Update saved course document with new URLs
        savedCourse.thumbnailImageURL = uploadResults[0].secure_url; 
        savedCourse.backgroundImageURL = uploadResults[1].secure_url;

        await savedCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update Course by Id
router.put('/:courseId', upload.fields([
    { name: 'thumbnailImage', maxCount: 1 }, 
    { name: 'backgroundImage', maxCount: 1 }
]), async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const updatedData = req.body; // Updated course data without images

        // 1. Find the course
        const course = await coureses.findById(courseId);
        if (!course) {
            return res.status(404).send({ message: 'Course not found' });
        }

        // 2. Update course data
        Object.keys(updatedData).forEach(key => { course[key] = updatedData[key]; });

        // 3. Handle image updates (if any)
        const promises = []; 
        if (req.files.thumbnailImage) {
            const thumbnailUploadResult = await cloudinary.uploader.upload(req.files.thumbnailImage[0].path, {
                public_id: `${course._id}-thumbnail`, 
                overwrite: true 
            });
            course.thumbnailImageURL = thumbnailUploadResult.secure_url; 
        }

        if (req.files.backgroundImage) {
            const backgroundUploadResult = await cloudinary.uploader.upload(req.files.backgroundImage[0].path, {
                public_id: `${course._id}-background`, 
                overwrite: true
            });
            course.backgroundImageURL = backgroundUploadResult.secure_url;
        }

        await Promise.all(promises);
        const updatedCourse = await course.save();
        res.status(200).json(updatedCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete Course and Images
router.delete('/:courseId', async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const course = await coureses.findById(courseId);

        if (!course) {
            return res.status(404).send({ message: 'Course not found' });
        }

        // Delete Images from Cloudinary
        const promises = [];
        if (course.thumbnailImageURL) {
            promises.push(cloudinary.uploader.destroy(`${courseId}-thumbnail`)); 
        }
        if (course.backgroundImageURL) {
            promises.push(cloudinary.uploader.destroy(`${courseId}-background`)); 
        }

        await Promise.all(promises); // Wait for Cloudinary deletions

        // Delete Course from Database 
        await coureses.findByIdAndDelete(courseId); 

        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

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

