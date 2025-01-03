const express = require('express');
const { getCampaigns, createCampaign, updateCampaign, deleteCampaign } = require('../controllers/campaignController');
const router = express.Router();

// show all campaigns -> get
router.get('/campaigns', getCampaigns);
// create a campaign -> post
router.post('/campaigns', createCampaign);
// update a campaign -> put
router.put('/campaigns/:id', updateCampaign);
// delete a campaign
router.delete('/campaigns/:id', deleteCampaign)

module.exports = router;