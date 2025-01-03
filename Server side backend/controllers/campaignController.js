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
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      req.body,
      {new: true},
    )
    res.status(201).json(updatedUser);  
  }
  catch(e){
    console.error('Error while updating user:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


const delete


module.exports = { getCampaigns, createCampaign, updateCampaign };