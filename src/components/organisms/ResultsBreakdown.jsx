import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponseQuestion,
  ResponseAnswer,
  CorrectOrIncorrectIcon,
} from '../atoms';

const ResultsBreakdown = ({ history, questions }) => {
  return (
    <div className="responses-board" data-testid="responsesboard">
      {history.map((historyObj) => {
        const { isCorrect, questionId, guess } = historyObj;
        const { question, correct } = questions.find(
          (q) => q.id === questionId,
        );
        return (
          <div className="response" key={questionId}>
            <CorrectOrIncorrectIcon isCorrect={isCorrect} />
            <ResponseQuestion isCorrect={isCorrect} question={question} />
            <ResponseAnswer
              guess={guess}
              isCorrect={isCorrect}
              correct={correct}
            />
          </div>
        );
      })}
    </div>
  );
};

ResultsBreakdown.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      questionId: PropTypes.number,
      guess: PropTypes.string,
      isCorrect: PropTypes.bool,
    }),
  ).isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      question: PropTypes.string,
      incorrect: PropTypes.arrayOf(PropTypes.string),
      answers: PropTypes.arrayOf(PropTypes.string),
      correct: PropTypes.string,
    }),
  ).isRequired,
};

export default ResultsBreakdown;
