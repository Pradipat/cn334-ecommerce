// myClassModel.js
import mongoose from 'mongoose';

const enrollmentSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }, 
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
});

export const enrollments = mongoose.model('Enrollment', enrollmentSchema);