import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }, // Reference to the user who owns the cart
  items: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

export const carts = mongoose.model('Cart', cartSchema);