const express = require('express');
const { getCampaigns, getCampaignById, getUserCampaigns, createCampaign, updateCampaign, deleteCampaign } = require('../controllers/campaignController');
const router = express.Router();

// show all campaigns -> get
router.get('/campaigns', getCampaigns);
// get user campaigns
router.get('/myCampaigns', getUserCampaigns);
// get element by id
router.get('/campaign/:id', getCampaignById)
// create a campaign -> post
router.post('/campaigns', createCampaign);
// update a campaign -> put
router.put('/updateCampaign/:id', updateCampaign);
// delete a campaign
router.delete('/deleteCampaign/:id', deleteCampaign)

module.exports = router;