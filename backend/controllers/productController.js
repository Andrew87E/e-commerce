import { Category, Product, Tag, ProductTag } from '../models';
import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Product.findAll({
            include: [
                Category,
                {
                    model: Tag,
                    through: {
                        attributes: []
                    }
                }
            ]
        }));

    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }

})

const getProduct = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                Category,
                {
                    model: Tag,
                    through: {
                        attributes: []
                    }
                }
            ]
        }));
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }

})

const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body);
        if (req.body.tagIds.length) {
            const productTagIdArr = req.body.tagIds.map((tag_id) => {
                return {
                    product_id: product.id,
                    tag_id,
                };
            });
            const productTagIds = await ProductTag.bulkCreate(productTagIdArr);
            res.status(200).json(productTagIds)
        }

        res.status(200).json(product);

    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

const updateProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        const productTags = ProductTag.findAll({ where: { product_id: req.params.id } });
        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
                return {
                    product_id: req.params.id,
                    tag_id,
                };
            });
        const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
        const updatedProductTags = await Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
        ]);
        res.json(updatedProductTags)
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Product.destroy({
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
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}