import React, { useContext } from 'react';
import Scoreboard from '../atoms/Scoreboard';
import { RoundContext } from '../logic/RoundContext';

const Results = () => {
  const { score } = useContext(RoundContext);

  return (
    <div>
      <Scoreboard score={score} />
    </div>
  );
};

Results.propTypes = {};

export default Results;
