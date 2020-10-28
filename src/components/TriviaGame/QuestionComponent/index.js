import React from 'react';

function QuestionForm({ shuffledChoices }) {

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="choice">
        <input type="radio" id="choice-0" name="choice-0" value={shuffledChoices[0]} />
        <label htmlFor="choice-0">{shuffledChoices[0]}</label>
      </span>
      <span className="choice">
        <input type="radio" id="choice-0" name="choice-0" value={shuffledChoices[1]} />
        <label htmlFor="choice-0">{shuffledChoices[1]}</label>
      </span>
      <span className="choice">
        <input type="radio" id="choice-0" name="choice-0" value={shuffledChoices[2]} />
        <label htmlFor="choice-0">{shuffledChoices[2]}</label>
      </span>
      <span className="choice">
        <input type="radio" id="choice-0" name="choice-0" value={shuffledChoices[3]} />
        <label htmlFor="choice-0">{shuffledChoices[3]}</label>
      </span>

    </form >
  );
};

export default QuestionForm;