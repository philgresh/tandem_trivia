import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
  return (
    <h2 className="question" data-testid="question">
      {question}
    </h2>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
};

export default Question;
