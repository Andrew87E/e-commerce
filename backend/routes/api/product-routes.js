const express = require('express');
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../../controllers/productController')

// The `/api/products` endpoint
router.route('/').get(getProducts).post(createProduct)

router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)


module.exports = router;
