const mongoose = require('mongoose');
const connectDB = require('../config/db');

const campaignSchema = mongoose.Schema({
  photo: String,
  title: String,
  type: String,
  description: String,
  minAmount: Number,
  deadline: Date,
  UserName: String,
  UserEmail: String,
})

module.exports = mongoose.model('Campaign', campaignSchema);