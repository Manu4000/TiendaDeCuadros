const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  // Otros campos del usuario si los tienes
});

const User = mongoose.model('User', userSchema);

module.exports = User;
