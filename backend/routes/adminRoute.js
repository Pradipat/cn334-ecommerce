import express from 'express';
import path, { resolve } from 'path';
import mongoose from 'mongoose'
import { mongoDBURL } from '../config.js';
import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';
import { coureses } from '../models/courseModel.js';
import { orders } from '../models/purchaseHistoryModel.js';
import { accounts } from '../models/accountModel.js';
import { spawn } from 'child_process';
import { rejects } from 'assert';
import { comments } from '../models/commentModel.js';
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


router.get('/:id/getCommentSelectCourse/:idCourse', async (req, res) => {
    try{
        const { id,idCourse } = req.params;
        const account = await accounts.findById(id);
        if (account.role != 'admin') {
            return res.status(200).json({message: "admin only"});
        }
        const commemt = await comments.find({course:idCourse});
        res.status(200).json(commemt);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



router.get('/:id/getCommentPolarity/:idCourse', async (req,res) =>{
    try {
        var arr = [];
        const { id, idCourse } = req.params;
        const account = await accounts.findById(id);
        let result = 0

        if (account.role != 'admin') {
            return res.status(200).json({ message: 'admin only' });
        }
        const commemts = await comments.find({course:idCourse});

        for (const commemt in commemts ){

            const pythonProcessPromise = new Promise((resolve, reject) => {
                const pythonProcess = spawn("python", ["python_script/ai4thai.py"]);
                let bufferData = Buffer.alloc(0);
                pythonProcess.stdin.write(JSON.stringify(commemts[commemt]["content"]));
                pythonProcess.stdin.end(); 
    
                pythonProcess.stdout.on('data', (data) => {
                    bufferData = Buffer.concat([bufferData, data]);
                });
    
                pythonProcess.stderr.on('data', (data) => {
                    console.error('Error from Python script:', data.toString());
                    reject(data.toString());
                });
                pythonProcess.stdout.on('end', () => {
                    const jsonData = JSON.parse(bufferData.toString());
                    console.log(jsonData);
                    resolve(jsonData)
              });
    
            });
            const jsonData = await pythonProcessPromise;
            arr.push(jsonData)
        }
        if (arr.length <= 0){
            res.json({result: null});
        }
        for(const i in arr){
            if(arr[i]){
                result += 1;
            }
        }
        if (result/arr.length >= 0.5){
            res.status(200).json({result:"Positive"});
        }
        else{
            res.status(200).json({result:"Negative"});
        }
          
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


export default router;