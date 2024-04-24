import mongoose from 'mongoose';

const categoriesSchema = mongoose.Schema({
    name: { type: String, required: true },
    subCategories: { type: [String], default: [] },
  });

export const categories = mongoose.model('Catergory', categoriesSchema);