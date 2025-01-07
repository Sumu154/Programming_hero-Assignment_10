const campaignModel = require('../models/campaignModel');

// get all campaigns
const getCampaigns = async (req, res) => {
  try{
    const campaigns = await campaignModel.find();
    res.status(200).json(campaigns);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}

// get campaign by one user -> by email
const getUserCampaigns = async (req, res) => {
  try{
    const { email } = req.query;

    let myCampaigns = await campaignModel.find( {userEmail: email} );
    res.status(200).json(myCampaigns)
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


// get campaign by id
const getCampaignById = async (req, res) => {
  try{
    const id = req.params.id;
    console.log(id);
    const campaign = await campaignModel.findOne( {_id: id} );
    res.status(200).json(campaign);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


const createCampaign = async (req, res) => {
  try{
    console.log('POST API hitting');
    // console.log(req.body);
    const campaign = req.body;

    const createdCampaign = await campaignModel.create(campaign); // Save the campaign in the database
    res.status(201).json(createdCampaign); // Send back the created campaign
  } 
  catch(e){
    console.error('Error while creating campaign:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


const updateCampaign = async (req, res) => {
  try{
    const { id } = req.params;
    const updatedCampaign = await campaignModel.findByIdAndUpdate(
      id,
      req.body,
      {new: true},
    )
    res.status(201).json(updatedCampaign);  
  }
  catch(e){
    console.error('Error while updating campaign:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


const deleteCampaign = async(req, res) => {
  try{
    const { id } = req.params;
    console.log(id);

    const deletedCampaign = await campaignModel.findByIdAndDelete(id);
    res.status(201).json(deletedCampaign);  
  }
  catch(e){
    console.error('Error while deleting campaign:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { getCampaigns, getCampaignById, getUserCampaigns, createCampaign, updateCampaign, deleteCampaign };