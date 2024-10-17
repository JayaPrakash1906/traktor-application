import React, { useEffect } from 'react';
import lity from 'lity';

const AddConnection = () => {
  useEffect(() => {
    const openLightbox = () => {
      
      lity('../../assets/images/svg.png');
    };

    // Add event listener to the button
    const button = document.getElementById('openButton');
    button.addEventListener('click', openLightbox);

    // Cleanup function to remove event listener
    return () => {
      button.removeEventListener('click', openLightbox);
    };
  }, []);

  return (
    <div>
      <h1>My React App</h1>
      <button id="openButton">Open Image</button>
    </div>
  );
};

export default AddConnection;
