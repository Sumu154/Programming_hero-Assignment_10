const mongoose = require('mongoose');
const connectDB = require('../config/db');

const donatedUserSchema = mongoose.Schema({
  name: String,
  email: String,
  campaign_id: String
})

module.exports = mongoose.model('donatedUser', donatedUserSchema);