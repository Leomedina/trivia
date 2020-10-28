import React, { useState } from 'react';
import './index.css';

function QuestionForm({ shuffledChoices, answer, handleGameState }) {
  const [radioData, setRadioData] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (radioData === answer) {
      handleGameState('success');
    } else {
      handleGameState('failed');
    };
  };

  const handleChange = ({ target }) => {
    setRadioData(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="choice">
        <input
          type="radio"
          id="choice-0"
          name="choice"
          onChange={handleChange}
          value={shuffledChoices[0]}
          required />
        <label htmlFor="choice-0">{shuffledChoices[0]}</label>
      </span>
      <span className="choice">
        <input
          type="radio"
          id="choice-1"
          name="choice"
          onChange={handleChange}
          value={shuffledChoices[1]} />
        <label htmlFor="choice-1">{shuffledChoices[1]}</label>
      </span>
      <span className="choice">
        <input
          type="radio"
          id="choice-2"
          name="choice"
          onChange={handleChange}
          value={shuffledChoices[2]} />
        <label htmlFor="choice-2">{shuffledChoices[2]}</label>
      </span>
      <span className="choice">
        <input
          type="radio"
          id="choice-3"
          name="choice"
          onChange={handleChange}
          value={shuffledChoices[3]} />
        <label htmlFor="choice-3">{shuffledChoices[3]}</label>
      </span>
      <button className="submit">Submit</button>
    </form >
  );
};

export default QuestionForm;