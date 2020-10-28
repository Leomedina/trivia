import React from 'react';
import QuestionForm from '../QuestionComponent';
import triviaJSON from '../../../assets/Apprentice_TandemFor400_Data.json';
import './index.css';

function gameComponent({ currQuestion, setGameState }) {
  const choices = [...triviaJSON[currQuestion].incorrect, triviaJSON[currQuestion].correct];
  const shuffledChoices = choices.sort(() => Math.random() - 0.5);

  const handleGameState = (state) => {
    setGameState(state);
  };

  return (
    <section>
      <h1 className="trivia-question">{triviaJSON[currQuestion].question}</h1>
      <QuestionForm
        shuffledChoices={shuffledChoices}
        answer={triviaJSON[currQuestion].correct}
        handleGameState={handleGameState} />
    </section >
  );
};

export default gameComponent;