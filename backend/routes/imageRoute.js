// imageRoute.js
import express from 'express';
import path from 'path';
import mongoose from 'mongoose'
import { images } from '../models/imageModel.js';
import { mongoDBURL } from '../config.js';
import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';

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


router.post('/', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        return res.status(200).json({ imageURL: result.secure_url }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;