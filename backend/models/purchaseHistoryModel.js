// purchaseHistoryModel.js
import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }, 
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }], 
  totalPrice: { type: Number, required: true },
  payment: { type: String, enum: ['Credit Card', 'PayPal'], default: 'PayPal' },
  createdAt: { type: Date, default: Date.now },
});

export const orders = mongoose.model('Order', orderSchema);
