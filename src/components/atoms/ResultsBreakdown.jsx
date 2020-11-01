import React, { useContext } from 'react';
import ResponseQuestion from './results/ResponseQuestion';
import { GameContext } from '../logic/RoundContext';

const ResultsBreakdown = () => {
  const { gameState } = useContext(GameContext);

  const {
    score: { history },
    questions,
  } = gameState;

  const results = history.map((historyObj) => {
    const { isCorrect, questionId, guess } = historyObj;
    const thisQuestion = questions.find((q) => q.id === questionId);
    return (
      <ResponseQuestion
        key={questionId}
        isCorrect={isCorrect}
        question={thisQuestion}
      />
    );
  });
  return (
    <div className="resultsboard" data-testid="resultsboard">
      {results}
    </div>
  );
};

export default ResultsBreakdown;
