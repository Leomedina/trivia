import React, { useState } from 'react';

import StartTrivia from './StartTrivia';
import GameComponent from './GameComponent';
import NextComponent from './NextComponent';

function TriviaGame() {
  const [gameState, setGameState] = useState('start');
  const [currQuestion, setCurrQuestion] = useState(0);

  return (
    <section className="trivia">
      {gameState === 'start' ?
        <StartTrivia
          setGameState={setGameState} /> :
        gameState === 'end' ? <h1>Thank you for playing! Come again soon</h1> :
          < GameComponent
            currQuestion={currQuestion}
            setGameState={setGameState} />}
      <hr />
      {gameState === 'success' ?
        <NextComponent
          message={"Correct "}
          setCurrQuestion={setCurrQuestion}
          currQuestion={currQuestion}
          setGameState={setGameState} /> :
        gameState === 'failed' ?
          <NextComponent
            message={"Sorry! Try another one or"}
            setCurrQuestion={setCurrQuestion}
            currQuestion={currQuestion}
            setGameState={setGameState} /> : ""}
    </section>
  )
};

export default TriviaGame;