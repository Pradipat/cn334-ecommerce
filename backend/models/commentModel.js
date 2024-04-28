// commentModel.js
import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
    content: {type: String,required: true},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true }, 
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    createdAt: { type: Date, default: Date.now },
});

export const comments = mongoose.model('Comment', commentSchema);