const { Schema, model } = require('mongoose');

const mongoose = require('mongoose');

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  amenities: [String],
  photos: [String],
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Listing = model('Listing', listingSchema);

module.exports = Listing;