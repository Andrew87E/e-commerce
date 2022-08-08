const router = require('express').Router();
const { Category, Product } = require('../../models');
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../../controllers/categoryController'


// The `/api/categories` endpoint
router.route('/').get(getCategories).post(createCategory)
router.route('/:id').get(getCategory).put(updateCategory).delete(deleteCategory)

module.exports = router;
