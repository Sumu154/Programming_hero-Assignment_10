const mongoose = require('mongoose');
const connectDB = require('../config/db');

const campaignSchema = mongoose.Schema({
  userName: String,
  userEmail: String,
  title: String,
  type: String,
  minAmount: Number,
  deadline: Date,
  photo: String,
  description: String,
})

module.exports = mongoose.model('Campaign', campaignSchema);