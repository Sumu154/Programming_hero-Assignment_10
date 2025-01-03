const express = require('express');
const { createUser, updateUser, getUsers } = require('../controllers/userController'); // Import the createUser controller
const router = express.Router();

// route for getting users -> get
router.get('/users', getUsers);
// Route for creating user -> post
router.post('/users', createUser);
// route for updating user -> put
router.put('/users/:id', updateUser);

// console.log('router is here')

module.exports = router;
