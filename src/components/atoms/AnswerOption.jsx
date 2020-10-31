import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const AnswerOption = ({ answer, guess, submitted }) => {
  const isCorrect = answer === guess;
  const classes = clsx(
    'answer-option',
    submitted && isCorrect && 'correct',
    submitted && !isCorrect && 'incorrect',
  );
  return (
    <div className={classes} data-testid="answer-option">
      {answer}
    </div>
  );
};

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  guess: PropTypes.string,
  submitted: PropTypes.bool,
};

AnswerOption.defaultProps = {
  guess: null,
  submitted: false,
};

export default AnswerOption;
