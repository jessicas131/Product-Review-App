var mongoose = require('mongoose');


var studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  facts: [factSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);