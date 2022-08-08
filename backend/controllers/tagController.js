import { Tag, Product } from "../models";

const getTags = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Tag.findAll({
            include: {
                model: Product,
                through: {
                    attributes: []
                }
            }
        }));
    } catch (error) {
        console.error(error)
        res.status(400).json(error)
    }

})

const getTag = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Tag.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Product,
                through: {
                    attributes: []
                }
            }
        }));
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }

})

const createTag = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Tag.create(req.body));
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

const updateTag = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Tag.update(req.body, {
            where: {
                id: req.params.id
            }
        }));
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

const deleteTag = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(await Tag.destroy({
            where: {
                id: req.params.id
            }
        }));
    } catch (error) {
        console.error(error)
        res.status(400).json(error)

    }
})

module.exports = {
    getTags,
    getTag,
    createTag,
    updateTag,
    deleteTag,
}