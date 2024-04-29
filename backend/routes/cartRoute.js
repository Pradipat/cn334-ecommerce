// cartRoute.js
import express from 'express';
import { carts } from '../models/cartModel.js';
import { coureses } from '../models/courseModel.js';
import mongoose from 'mongoose';

const router = express.Router();

// Get User Cart by User ID
router.get('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        const cart = await carts.findOne({ user: userId }).populate('items.course');

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json(cart);

    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete some Course from Cart 
router.delete('/:userId/items/:courseId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const courseId = req.params.courseId;

        const cart = await carts.findOne({ user: userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        // Remove the item
        cart.items.pull({ course: courseId }); // Mongoose 'pull' to remove from array 

        await cart.save();
        res.status(200).json({ message: 'Course deleted from cart' });

    } catch (error) {
        console.error('Error deleting course from cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete User Cart by User ID
router.delete('/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;

        const deletedCart = await carts.findOneAndDelete({ user: userId });

        if (!deletedCart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json({ message: 'Cart deleted successfully' });

    } catch (error) {
        console.error('Error deleting cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add Course to Cart Route
router.post('/addCourse', async (req, res) => {
    try {
        const userId = req.body.userId; // Get from authentication middleware
        const courseId = req.body.courseId;

        // 1. Find the user's cart
        let cart = await carts.findOne({ user: userId });

        // 2. If the cart doesn't exist, create one
        if (!cart) { 
            cart = await carts.create({ user: userId, items: [] }); 
        } 

        // 3. Check if the course is already in the cart
        const existingItemIndex = cart.items.findIndex(item => item.course.toString() === courseId);

        // 4. Add or Update the course
        if (existingItemIndex !== -1) {
            cart.items[existingItemIndex].quantity += 1; // Increment quantity
        } else {
            cart.items.push({ course: courseId }); // Add the course
        }

        // 5. Save and Respond
        await cart.save();
        res.status(200).json({ message: 'Course added to cart' });

    } catch (error) {
        console.error('Error adding course to cart:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;