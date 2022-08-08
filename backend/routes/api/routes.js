const router = require('express').Router();
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const categoryRoutes = require('./category-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
