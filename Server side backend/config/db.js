const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.d0ab4.mongodb.net/Crowd-funding?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)

const connectDB = async () => {
  try{
    await mongoose.connect(uri);
    console.log('Connected to mongoDB atlas');
  }
  catch(e){
    console.error('Failed to connect to MongoDB');
  }
}
connectDB();

module.exports = connectDB;