const { Product } = require('../models');

const productData = [
  {
    productName: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    categoryId: 1,
  },
  {
    productName: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    categoryId: 5,
  },
  {
    productName: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    categoryId: 4,
  },
  {
    productName: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    categoryId: 3,
  },
  {
    productName: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    categoryId: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;