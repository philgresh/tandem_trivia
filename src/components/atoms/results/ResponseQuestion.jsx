import React from 'react';
import PropTypes from 'prop-types';
import CorrectOrIncorrectIcon from '../CorrectOrIncorrectIcon';

const ResponseQuestion = ({ question, isCorrect }) => {
  return (
    <div className="response-question">
      <CorrectOrIncorrectIcon isCorrect={isCorrect} />
      {question}
    </div>
  );
};

ResponseQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
};

export default ResponseQuestion;
