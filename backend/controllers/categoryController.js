const { Category, Product } = require('../models');
const asyncHandler = require('express-async-handler')

const getCategories = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Category.findall({ include: Product }))
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }

})

const getCategory = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Category.findOne({
            where: {
                id: req.params.id
            },
            include: Product,
        }))
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }

})

const createCategory = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        }))
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

const updateCategory = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        }))
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

const deleteCategory = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Category.destroy({
            where: {
                id: req.params.id
            }
        }))
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

module.exports = {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
}