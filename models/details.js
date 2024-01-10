const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const detailsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('details', detailsSchema);