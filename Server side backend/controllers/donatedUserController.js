const donatedUserModel = require('../models/donatedUserModel');

// get all donated user
const getDonatedUsers = async (req, res) => {
  try{
    const donatedUsers = await donatedUserModel.find();
    res.status(200).json(donatedUsers);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
};


// get campaign by one user -> by email
const getDonatedUserDonations = async (req, res) => {
  try{
    const { email } = req.query;

    let myDonations = await donatedUserModel.find( {email: email} );
    res.status(200).json(myDonations)
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


// create donated users
const createDonatedUser = async (req, res) => {
  try{
    console.log('post api hiting');
    const donatedUser = req.body;
    console.log(donatedUser);

    const createdDonatedUser = await donatedUserModel.create(donatedUser);
    res.status(200).json(createdDonatedUser);

  }
  catch(e){
    console.error('Error while creating donated user:', e.message);
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}


module.exports = { getDonatedUsers, createDonatedUser, getDonatedUserDonations };