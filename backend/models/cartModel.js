// cartModel.js
import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  });

export const carts = mongoose.model('Cart', cartSchema);