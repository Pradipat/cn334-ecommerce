// purchaseHistoryRoute.js
import express from 'express';
import { orders } from '../models/purchaseHistoryModel.js';

const router = express.Router();

// Create New Purchase History
router.post('/', async (req, res) => {
    try {
        const userId = req.body.userId; // Get from authentication middleware
        const courses = req.body.courses;
        const totalPrice = req.body.totalPrice;
        const payment = req.body.payment;

        const newOrder = new orders({
            user: userId,
            courses,
            totalPrice,
            payment, 
        });

        await newOrder.save();

        res.status(201).json({ message: 'Purchase history created' });

    } catch (error) {
        console.error('Error creating purchase history:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get User Purchase History
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        const purchaseHistory = await orders.find({ user: userId }).populate('courses');

        if (!purchaseHistory) {
            return res.status(404).json({ message: 'Purchase history not found' });
        }

        res.status(200).json(purchaseHistory); 

    } catch (error) {
        console.error('Error fetching purchase history:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;