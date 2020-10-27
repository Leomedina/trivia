import React, { useState } from 'react';
import triviaJSON from '../../assets/Apprentice_TandemFor400_Data.json';
import StartTrivia from './StartTrivia';

  function TriviaGame() {
    const [gameState, setGameState] = useState('start');

    return (
      <section className="trivia">
        {gameState === 'start' ?
          <StartTrivia setGameState={setGameState} /> : <></>}
      </section>
    );
  };

export default TriviaGame;