import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Rating from './Rating';

function ArtistProfile() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    async function fetchArtist() {
      const { data } = await axios.get(`/api/artists/${artistId}`);
      setArtist(data);
      setRating(data.averageRating);
    }
    fetchArtist();
  }, [artistId]);

  const handleRatingChange = (newRating) => {
    // Here, send the new rating to the server to update
    console.log(`New rating for artist is: ${newRating}`);
  };

  return (
    <div>
      <h1>{artist.name}</h1>
      <Rating rating={rating} onRatingChange={handleRatingChange} />
      <p>More details about the artist and their artwork...</p>
    </div>
  );
}

export default ArtistProfile;
