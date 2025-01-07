const mongoose = require('mongoose');
const connectDB = require('../config/db');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  photo: String,
})

module.exports = mongoose.model('User', userSchema);