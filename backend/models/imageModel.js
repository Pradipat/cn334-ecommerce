// imageModel.js
import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    contentType: { type: String, required: true },
});

export const images = mongoose.model('Image', imageSchema);
