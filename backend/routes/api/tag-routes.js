const router = require('express').Router();
import { getTags, getTag, createTag, updateTag, deleteTag, } from '../../controllers'

// The `/api/tags` endpoint
router.route('/').get(getTags).post(createTag)

router.route('/:id').get(getTag).put(updateTag).delete(deleteTag)

module.exports = router;
