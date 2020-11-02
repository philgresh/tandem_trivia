import React from 'react';
import PropTypes from 'prop-types';

const ResponseQuestion = ({ question, isCorrect }) => {
  const className = `response-question ${isCorrect ? 'correct' : 'incorrect'}`;
  return <div className={className}>{question}</div>;
};

ResponseQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default ResponseQuestion;
