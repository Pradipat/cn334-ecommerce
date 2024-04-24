import express from 'express';
import { categories } from '../models/categoriesModel.js';

const router = express.Router();

// Create a new Category
router.post('/', async (req, res) => {
    try{
        const { name } = req.body;

        if (!name ) {
            return res.status(400).send({ message: 'Send all required fields: name ' });
        }

        const existingCategory = await categories.findOne({ name });
        if (existingCategory) {
            return res.status(400).send({ message: 'Category name already exists' });
        }

        const newCategory = { name };

        const category = await categories.create(newCategory);

        return res.status(201).send(category);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});

// Add a new subcategory to a category
router.put('/subcategory', async (req, res) => {
    try {
      const { categoryName, subCategoryName } = req.body;
  
      if (!subCategoryName) {
        return res.status(400).send({ message: 'Subcategory name is required' });
      }
  
      // Find the category by name
      const category = await categories.findOne({ name: categoryName });
  
      if (!category) {
        return res.status(404).send({ message: 'Category not found' });
      }
  
      // Check if the subcategory already exists
      if (category.subCategories.includes(subCategoryName)) {
        return res.status(400).send({ message: 'Subcategory already exists' });
      }
  
      // Add the new subcategory
      category.subCategories.push(subCategoryName);
  
      // Save the updated category
      const updatedCategory = await category.save();
  
      return res.status(200).send(updatedCategory);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: 'Internal server error' });
    }
  });

// Get ALL category
router.get('/', async (req, res) => {
    try{
        const category = await categories.find({});

        return res.status(200).send({category});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
})

// Get subcategories by main category
router.get('/subcategories/:mainCategoryName', async (req, res) => {
  try {
      const mainCategoryName = req.params.mainCategoryName;

      const category = await categories.findOne({ name: mainCategoryName });

      if (!category) {
          return res.status(404).send({ message: 'Category not found' });
      }

      // Return only the subcategories
      return res.status(200).send({ subCategories: category.subCategories }); 
  } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: 'Server error' });
  }
});

export default router;