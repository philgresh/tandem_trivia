import React from 'react';
import PropTypes from 'prop-types';
import { AnswerOption } from '../atoms';

const AnswerOptions = ({
  answers,
  correct,
  selected,
  submitted,
  setSelected,
}) => {
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
            submitted={submitted}
          />
        );
      })}
    </div>
  );
};

AnswerOptions.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  correct: PropTypes.string.isRequired,
};

export default AnswerOptions;
