import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const AnswerOption = ({ answer, selected, guess, submitted, onChange }) => {
  const isCorrect = answer === guess;
  const classes = clsx(
    'answer-option',
    submitted && isCorrect && 'correct',
    submitted && !isCorrect && 'incorrect',
    selected && 'selected',
  );
  return (
    <button
      type="button"
      className={classes}
      data-testid="answer-option"
      onClick={onChange}
    >
      {answer}
    </button>
  );
};

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  guess: PropTypes.string,
  submitted: PropTypes.bool,
  selected: PropTypes.bool,
};

AnswerOption.defaultProps = {
  guess: null,
  submitted: false,
  selected: false,
};

export default AnswerOption;
