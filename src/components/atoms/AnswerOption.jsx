import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import CorrectOrIncorrectIcon from './CorrectOrIncorrectIcon';

const AnswerOption = ({ answer, selected, isCorrect, submitted, onChange }) => {
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
      disabled={submitted}
    >
      {submitted && selected && (
        <CorrectOrIncorrectIcon selected={selected} isCorrect={isCorrect} />
      )}
      {answer}
    </button>
  );
};

AnswerOption.propTypes = {
  answer: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  submitted: PropTypes.bool,
  selected: PropTypes.bool,
};

AnswerOption.defaultProps = {
  submitted: false,
  selected: false,
};

export default AnswerOption;
