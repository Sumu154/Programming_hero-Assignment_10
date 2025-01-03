const campaignModel = require('../models/campaignModel');

const getCampaigns = async (req, res) => {
  try{
    const users = await campaignModel.find();
    res.status(200).json(users);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}

const createCampaign = async (req, res) => {
  try{
    console.log('POST API hitting');
    // console.log(req.body);
    const user = req.body;

    const createdUser = await userModel.create(user); // Save the user in the database
    res.status(201).json(createdUser); // Send back the created user
  } 
  catch(e){
    console.error('Error while creating user:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


const updateCampaign = async (req, res) => {
  try{
    const { id} = req.params;
    const updatedCampaign = await userModel.findByIdAndUpdate(
      id,
      req.body,
      {new: true},
    )
    res.status(201).json(updatedCampaign);  
  }
  catch(e){
    console.error('Error while updating user:', e.message);
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
    console.error('Error while deleting user:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { getCampaigns, createCampaign, updateCampaign, deleteCampaign };