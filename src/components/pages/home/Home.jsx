import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRound } from '../../logic';

const Home = () => {
  const [input, setInput] = useState('');
  const { makeGuess, startNewGame, score, currQuestion } = useRound();

  const onSubmit = () => {
    const { isCorrect } = makeGuess(input, currQuestion.id);
    console.log(isCorrect);
  };

  return (
    <div>
      Score: {score?.correct ?? 0}
      <button onClick={startNewGame} type="button">
        New Game
      </button>
      <div>{currQuestion && currQuestion?.question}</div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={onSubmit} type="button">
        Submit
      </button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
