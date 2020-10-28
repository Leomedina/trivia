import React from 'react';
import './index.css';

function StartTrivia({ setGameState }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    setGameState('active');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="start-btn">start</button>
    </form >
  );
};

export default StartTrivia;