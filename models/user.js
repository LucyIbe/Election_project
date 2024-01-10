const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
  RegNo: {
    type: String,
    required: true
  },
  PhoneNo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', userSchema);