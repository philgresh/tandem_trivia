import React from 'react';
import PropTypes from 'prop-types';
import { Question, AnswerOption, GuessButton } from '../atoms';
import AnswerOptions from './AnswerOptions';
import { useQuestion } from '../logic';

const QuestionCard = ({ currQuestion, onSubmit, nextQuestion }) => {
  const { selected, setSelected, submit } = useQuestion(onSubmit, nextQuestion);
  const { id, question, correct, answers } = currQuestion;

  const submitted = selected !== '';
  const lastQuestion = false;

  return (
    <div className="question-card">
      <Question question={question} />
      <AnswerOptions
        answers={answers}
        submitted={submitted}
        selected={selected}
        setSelected={setSelected}
      />
      <GuessButton
        onSubmit={submit}
        submitted={submitted}
        lastQuestion={lastQuestion}
      />
    </div>
  );
};

QuestionCard.propTypes = {
  currQuestion: PropTypes.shape({
    id: PropTypes.number,
    question: PropTypes.string,
    correct: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default QuestionCard;
