const express = require('express');
const { getDonatedUsers, createDonatedUser, getDonatedUserDonations } = require('../controllers/donatedUserController');
const router = express.Router();

// route for getting donations -> get
router.get('/donatedUsers', getDonatedUsers);
// route for getting donations
router.get('/donatedUserDonations', getDonatedUserDonations);
// Route for creating donations -> post
router.post('/donatedUsers', createDonatedUser);

module.exports = router;