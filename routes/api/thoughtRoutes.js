const router = require('express').Router();
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/users
router.route('/').get(getThought).post(createThought)

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;