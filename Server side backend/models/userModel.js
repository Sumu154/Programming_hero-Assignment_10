const mongoose = require('mongoose');
const connectDB = require('../config/db');

const userSchema = mongoose.Schema({
  photo: String,
  email: String,
  name: String,
})

module.exports = mongoose.model('User', userSchema);