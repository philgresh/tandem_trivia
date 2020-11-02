import React from 'react';
import PropTypes from 'prop-types';

const ResponseAnswer = ({ guess, correct, isCorrect }) => {
  const className = isCorrect ? 'correct' : 'incorrect';
  return (
    <div className={`response-guess ${className}`}>
      <span>
        You answered:&nbsp;<strong>{guess}</strong>
      </span>
      {!isCorrect && (
        <>
          <br />
          <span>
            The correct answer was: <strong>{correct}</strong>
          </span>
        </>
      )}
    </div>
  );
};

ResponseAnswer.propTypes = {
  guess: PropTypes.string.isRequired,
  correct: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default ResponseAnswer;
