// ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  return (
    <img
      className="d-block w-100"
      src={`path_to_images/${text.toLowerCase()}.jpg`}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
