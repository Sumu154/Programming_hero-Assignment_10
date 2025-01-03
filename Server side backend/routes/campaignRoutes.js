const express = require('express');
const { getCampaigns, createCampaign, updateCampaign } = require('../controllers/campaignController');
const router = express.Router();

// show all campaigns -> get
router.get('/campaigns', getCampaigns);
// create a campaign -> post
router.post('/campaign', createCampaign);
// update a campaign -> put
router.put('/campaign', updateCampaign);


module.exports = router;