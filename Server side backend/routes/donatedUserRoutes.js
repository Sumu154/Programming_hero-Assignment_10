const express = require('express');
const { getDonatedUsers, createDonatedUser, getDonatedUserDonations, deleteDonatedUser } = require('../controllers/donatedUserController');
const router = express.Router();

// route for getting donations -> get
router.get('/donatedUsers', getDonatedUsers);
// route for getting donations
router.get('/donatedUserDonations', getDonatedUserDonations);
// Route for creating donations -> post
router.post('/donatedUsers', createDonatedUser);
// route for deleting donation -> delete
router.delete('/donatedUsers/:id', deleteDonatedUser)

module.exports = router;