import React, { useState } from 'react';
import StartTrivia from './StartTrivia';
import GameComponent from './GameComponent';

function TriviaGame() {
  const [gameState, setGameState] = useState('start');
  const [currQuestion, setCurrQuestion] = useState(0);

  return (
    <section className="trivia">
      {gameState === 'start' ?
        <StartTrivia
          setGameState={setGameState} /> :
        <GameComponent
          currQuestion={currQuestion}
          setCurrQuestion={setCurrQuestion} />}
    </section>
  )
};

export default TriviaGame;