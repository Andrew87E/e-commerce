const router = require('express').Router();
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../../controllers'

// The `/api/products` endpoint
router.route('/').get(getProducts).post(createProduct)

router.route('/:id').get(getProduct).put(updateProduct).delete(deleteProduct)


module.exports = router;
