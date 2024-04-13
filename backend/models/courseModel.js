// courseModel.js
import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  descriptionTopic: { type: String, required: true },
  descriptionContent: { type: String, required: true },
  price: { type: Number, required: true },
  instructorName: { type: String, required: true },
  instructorRole: { type: String, required: true },
  mainCategory: { type: String, required: true },
  subCategory: { type: String, required: true },
  soldCount: { type: Number, default: 0},
  availableTime: {type: Date, required: true},
  level: {type: String, required: true},
  totalVideos: {type: Number, required: true},
  totalTime: {type: Number, required: true},
  thumbnailImage: { type: String },
  backgroundImage: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const coureses = mongoose.model('Course', courseSchema);
