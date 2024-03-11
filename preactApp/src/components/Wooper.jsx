// src/ReactComponent.jsx
import React, { useState, useEffect } from 'react';

const WooperComponent = () => {
  //const [message, setMessage] = useState('');

  // useEffect(() => {
  //   // Fetch dynamic data from Go API
  //   fetch('/api/data')
  //     .then(response => response.json())
  //     .then(data => setMessage(data.message));
  // }, []);

  return (
    <div>
      <h1>Wooper Component</h1>
      {/* <p>{message}</p> */}
    </div>
  );
};

export default WooperComponent;
