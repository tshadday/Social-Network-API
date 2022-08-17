const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

userRoutes.use('/users', userRoutes);
thoughtRoutes.use('/thoughts', thoughtRoutes);

module.exports = router;