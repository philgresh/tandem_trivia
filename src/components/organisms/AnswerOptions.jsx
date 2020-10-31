import React from 'react';
import PropTypes from 'prop-types';
import { AnswerOption } from '../atoms';

const AnswerOptions = ({ answers, selected, setSelected }) => {
  return (
    <div className="answer-options">
      {answers.map((answer) => {
        const isSelected = selected === answer;
        const onChange = () => setSelected(answer);
        return (
          <AnswerOption
            key={answer}
            answer={answer}
            onChange={onChange}
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
};

export default AnswerOptions;
