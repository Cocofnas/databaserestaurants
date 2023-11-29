import React, { useState, useEffect } from 'react';
import MapComponent from './MapComponent';

function RestaurantDetails({ restaurantId }) {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`/restaurants/${restaurantId}`)
      .then(response => response.json())
      .then(data => setRestaurant(data))
      .catch(error => console.error("Error fetching restaurant data:", error));
  }, [restaurantId]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.restaurantName}</h1>
      <p>{restaurant.description}</p>
      <MapComponent location={restaurant.address} />
    </div>
  );
}

export default RestaurantDetails;
