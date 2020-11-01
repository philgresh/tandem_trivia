import React, { useState } from 'react';
import { useRound } from '../logic';

const Home = () => {
  const [input, setInput] = useState('');
  const { makeGuess, startNewRound, score, currQuestion } = useRound();

  const onSubmit = () => {
    makeGuess(input, currQuestion.id);
  };

  return <>HOME</>;
};

Home.propTypes = {};

export default Home;
