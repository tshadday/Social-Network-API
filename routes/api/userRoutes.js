const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController.js');

// /api/users
router.route('/').get(getUser).post(createUser)

// /api/users/:userId/friends/:friendsId
router
    .route('/:userId/friend/:friendsId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId

module.exports = router;