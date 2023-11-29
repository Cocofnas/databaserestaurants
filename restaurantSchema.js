const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantName: String,
  address: String,
  city: String,
  country: String,
  borough: String,
  cuisine: String,
  occasion: String,
  mood: String,
  description: String,
  url: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
