const userModel = require('../models/userModel'); // Import the user model

const getUsers = async (req, res) => {
  try{
    const users = await userModel.find();
    res.status(200).json(users);
  }
  catch(e){
    res.status(500).json({ message: 'Internal Server Error', error: e.message });
  }
}

// Controller function to create a user
const createUser = async (req, res) => {
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

const updateUser = async (req, res) => {
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

module.exports = { createUser, updateUser, getUsers };
