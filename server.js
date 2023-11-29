const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json()); // For parsing application/json

// Define the Restaurant schema
const restaurantSchema = new mongoose.Schema({
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

// Create the Restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

// Route to create a new restaurant
app.post('/restaurants', (req, res) => {
  Restaurant.create(req.body, (err, newRestaurant) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(newRestaurant);
  });
});

// Route to get a restaurant by ID
app.get('/restaurants/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return res.status(500).send(err);
    if (!restaurant) return res.status(404).send("Restaurant not found");
    res.status(200).send(restaurant);
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
