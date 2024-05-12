import React from 'react';
import StarRatings from 'react-rating-stars-component';

const Rating = ({ rating, onRatingChange }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      numberOfStars={5}
      name="rating"
      changeRating={onRatingChange}
      isSelectable={true}
      size={30}
    />
  );
};

export default Rating;
