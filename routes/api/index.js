const router = require('express').Router();
const userRoutes = require('./userRoutes');

userRoutes.use('/users', userRoutes);

module.exports = router;