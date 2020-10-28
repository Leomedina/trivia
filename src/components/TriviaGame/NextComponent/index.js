import React from 'react';
import triviaJSON from '../../../assets/Apprentice_TandemFor400_Data.json';
import './index.css';

function NextComponent({ message, setCurrQuestion, currQuestion, setGameState }) {
  const endNumber = triviaJSON.length - 1;
  const handleButton = () => {
    setCurrQuestion(currQuestion + 1);
    if (currQuestion < endNumber) {
      setGameState('continue');
    } else {
      setGameState('end');
    }
  }
  return (
    <section className="message">
      <h1>{message} click below to go to the next one!</h1>
      <button onClick={handleButton}>Next Question</button>
    </section>
  );
};

export default NextComponent;