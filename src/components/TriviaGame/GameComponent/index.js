import React from 'react';
import triviaJSON from '../../../assets/Apprentice_TandemFor400_Data.json';
import QuestionForm from '../QuestionComponent';
import './index.css';

function gameComponent({ currQuestion }) {
  const choices = [...triviaJSON[currQuestion].incorrect, triviaJSON[currQuestion].correct];
  const shuffledChoices = choices.sort(() => Math.random() - 0.5);


  return (
    <section>
      <h1 className="trivia-question">{triviaJSON[0].question}</h1>
      <QuestionForm shuffledChoices={shuffledChoices} />
    </section >
  );
};

export default gameComponent;