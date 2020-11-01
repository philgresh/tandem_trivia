import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const correctResponses = Object.freeze([
  'Congratulations!',
  'Well done!',
  "That's correct!",
  'Way to go!',
  "You're on fire!",
]);

export const incorrectResponses = Object.freeze([
  "You'll get 'em next time!",
  'Keep working at it!',
  'This is how we learn!',
  "The next one's yours for sure!",
  "Don't worry about it!",
]);

const sample = (array) => {
  const randNum = Math.floor(Math.random() * array.length);
  return array[randNum];
};

const AnswerFeedback = ({ isCorrect, submitted }) => {
  const classes = clsx(
    'answer-feedback',
    submitted && isCorrect && 'correct',
    submitted && !isCorrect && 'incorrect',
  );

  let text = '';
  if (submitted) {
    if (isCorrect) {
      text = sample(correctResponses);
    } else text = sample(incorrectResponses);
  }

  return (
    <div className={classes} data-testid="answerfeedback">
      {text}
    </div>
  );
};

AnswerFeedback.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
};

export default AnswerFeedback;
