import React from 'react';
import PropTypes from 'prop-types';
import { AnswerOption } from '../atoms';

const AnswerOptions = ({ answers, correct, selected, setSelected }) => {
  return (
    <div className="answer-options">
      {answers.map((answer) => {
        const isSelected = selected === answer;
        const isCorrect = correct === answer;
        return (
          <AnswerOption
            key={answer}
            answer={answer}
            isCorrect={isCorrect}
            onChange={() => setSelected(answer)}
            selected={isSelected}
          />
        );
      })}
    </div>
  );
};

AnswerOptions.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  correct: PropTypes.string.isRequired,
};

export default AnswerOptions;
