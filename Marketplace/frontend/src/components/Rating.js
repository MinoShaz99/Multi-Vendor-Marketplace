// Rating.js
import React from 'react';
import StarRatings from 'react-rating-stars-component';

const Rating = ({ rating, onRatingChange }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      numberOfStars={5}
      name="rating"
      changeRating={onRatingChange} // Ensure this is passed and used correctly
      isSelectable={true} // Users can select a rating
      size={30} // Adjust size as needed
    />
  );
};

export default Rating;
