import React, { useContext } from 'react';
import { Scoreboard } from '../atoms';
import { ResultsBreakdown } from '../organisms';
import { RoundContext } from '../logic/RoundContext';

const Results = () => {
  const { score, questions } = useContext(RoundContext);

  return (
    <div className="results card">
      <Scoreboard score={score} />
      <ResultsBreakdown history={score.history} questions={questions} />
    </div>
  );
};

Results.propTypes = {};

export default Results;
