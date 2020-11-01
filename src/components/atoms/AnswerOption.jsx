import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const CorrectOrIncorrectIcon = ({ selected, isCorrect }) => {
  if (!selected) return null;
  if (isCorrect) return <FontAwesomeIcon icon={faCheck} color="inherit" />;
  return <FontAwesomeIcon icon={faTimes} color="inherit" />;
};

CorrectOrIncorrectIcon.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  selected: PropTypes.bool,
};

CorrectOrIncorrectIcon.defaultProps = {
  selected: false,
};

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
    >
      {submitted && (
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
