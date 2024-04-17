import express from 'express';
import path from 'path';
import mongoose from 'mongoose'
import { mongoDBURL } from '../config.js';
import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';
import { coureses } from '../models/courseModel.js';
import { orders } from '../models/purchaseHistoryModel.js';
import { Admin } from 'mongodb';
import { accounts } from '../models/accountModel.js';

const router = express.Router();

cloudinary.config({ 
    cloud_name: 'dheoypevh', 
    api_key: '658458416741846', 
    api_secret: 'AVGWaaW_SFAL0kVqvTxuW67ja2w' 
  });


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Temporary upload folder
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        
        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }

        res.status(200).json({ message: 'this admin page' });

    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id/getallcourse', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }
        const allCourses = await coureses.find({});
        res.status(200).json(allCourses);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id/getallsold', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }
        let sum = 0
        const allCourses = await coureses.find({});
        for (const i in allCourses){
            sum += allCourses[i].soldCount
        }
        res.status(200).json(sum)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/:id/createcourse', upload.fields([
    { name: 'thumbnailImage', maxCount: 1 }, 
    { name: 'backgroundImage', maxCount: 1 }
]), async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }

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


router.delete('/:id/deletecourse/:courseId', async (req, res) => {
    try {

        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }


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

router.put('/:id/updatecourse/:courseId', upload.fields([
    { name: 'thumbnailImage', maxCount: 1 }, 
    { name: 'backgroundImage', maxCount: 1 }
]), async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }



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


router.get('/:id/gettotalincome', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }

        let sum = 0
        const allOrders = await orders.find({});
        for (const i in allOrders){
            sum += allOrders[i].totalPrice
        }
        res.status(200).json(sum)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/:id/gettopsell', async (req, res) => {
    try {
        const { id } = req.params;
        const account = await accounts.findById(id);

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }
        const allCourses = await coureses.find({});
        const coursetopselling = []
        console.log(typeof(allCourses));
        let tmp1 = []
        for (const i in allCourses){
            tmp1.push(allCourses[i])
        }
        tmp1.sort((a,b) => b.soldCount - a.soldCount)
        res.status(200).json(tmp1)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


export default router;