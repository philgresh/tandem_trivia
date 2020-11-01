import React, { useState } from 'react';
import { useRound } from '../logic';

const Home = () => {
  const [input, setInput] = useState('');
  const { makeGuess, startNewRound, score, currQuestion } = useRound();

  const onSubmit = () => {
    makeGuess(input, currQuestion.id);
  };

  return (
    <>
      Score: {score?.correct ?? 0}
      <button onClick={startNewRound} type="button">
        New Game
      </button>
      <div>{currQuestion && currQuestion?.question}</div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={onSubmit} type="button">
        Submit
      </button>
    </>
  );
};

Home.propTypes = {};

export default Home;