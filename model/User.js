const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  status: { type: Number, default: 1, required: false },
}, { versionKey: false });

const User = mongoose.model('User', userSchema);
module.exports = User;
