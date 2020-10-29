import React, { useState } from 'react';
import { Navbar, Main } from '../../organisms';
import { useRound } from '../../logic';

const Home = () => {
  const [input, setInput] = useState('');
  const { makeGuess, startNewGame, score, currQuestion } = useRound();

  const onSubmit = () => {
    makeGuess(input, currQuestion.id);
  };

  return (
    <>
      <Navbar />
      <Main>
        Score: {score?.correct ?? 0}
        <button onClick={startNewGame} type="button">
          New Game
        </button>
        <div>{currQuestion && currQuestion?.question}</div>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={onSubmit} type="button">
          Submit
        </button>
      </Main>
    </>
  );
};

Home.propTypes = {};

export default Home;