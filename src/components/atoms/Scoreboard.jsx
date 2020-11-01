import React from 'react';
import PropTypes from 'prop-types';

const Scoreboard = ({ score }) => {
  const { correct, incorrect } = score;
  return (
    <div data-testid="scoreboard" className="scoreboard">
      <div className="correct">
        <span className="score-header">Correct</span>
        <span className="score correct">{correct}</span>
      </div>
      <div className="incorrect">
        <span className="score-header">Incorrect</span>
        <span className="score incorrect">{incorrect}</span>
      </div>
    </div>
  );
};

Scoreboard.propTypes = {
  score: PropTypes.shape({
    correct: PropTypes.number,
    incorrect: PropTypes.number,
  }).isRequired,
};

export default Scoreboard;
