import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from './Button';

const GuessButton = ({ submitted, lastQuestion, onClick }) => {
  const classes = clsx(
    'guess-button',
    submitted && 'submitted',
    lastQuestion && 'last-question',
  );
  let buttonText = submitted ? 'Next Question' : 'Submit Answer';
  if (lastQuestion) buttonText = 'See results!';
  return (
    <Button dataTestId="guess-button" className={classes} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

GuessButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  submitted: PropTypes.bool,
  lastQuestion: PropTypes.bool,
};

GuessButton.defaultProps = {
  submitted: false,
  lastQuestion: false,
};

export default GuessButton;
