import React from 'react';
import PropTypes from 'prop-types';
import { Question, AnswerFeedback, GuessButton } from '../atoms';
import AnswerOptions from './AnswerOptions';
import { useQuestion } from '../logic';

const QuestionCard = ({ currQuestion, onSubmit, nextQuestion }) => {
  const {
    selected,
    submitted,
    lastQuestion,
    setSelected,
    onClick,
  } = useQuestion(onSubmit, nextQuestion);
  const { question, correct, answers } = currQuestion;

  const isCorrect = selected === correct;

  return (
    <div className="question-card">
      <Question question={question} />
      <AnswerOptions
        answers={answers}
        submitted={submitted}
        selected={selected}
        setSelected={setSelected}
        correct={correct}
      />
      <AnswerFeedback isCorrect={isCorrect} submitted={submitted} />
      <GuessButton
        onClick={onClick}
        submitted={submitted}
        lastQuestion={lastQuestion}
        selected={selected !== ''}
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
