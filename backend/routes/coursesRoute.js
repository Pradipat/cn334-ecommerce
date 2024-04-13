// coursesRoute.js
import express from 'express';
import mongoose from 'mongoose'
import { coureses } from '../models/courseModel.js';
import { images } from '../models/imageModel.js';
import { mongoDBURL } from '../config.js';

const router = express.Router();


export default router;