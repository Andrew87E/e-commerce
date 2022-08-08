const express = require('express');
const router = express.Router();
const { Category, Product } = require('../../models');
const { getCategories, getCategory, createCategory, updateCategory, deleteCategory } = require('../../controllers/categoryController')


// The `/api/categories` endpoint
router.route('/').get(getCategories).post(createCategory)
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)

module.exports = router;
