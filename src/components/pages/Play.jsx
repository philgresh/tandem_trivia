import React, { useEffect } from 'react';
import { QuestionCard } from '../organisms';
import { useRound } from '../logic';

const Play = () => {
  const { currQuestion, makeGuess, startNewRound, nextQuestion } = useRound();
  useEffect(() => {
    startNewRound();
    console.log('starting new round');
  }, []);

  const onSubmit = (guess) => {
    console.log('Hit submit');
    return makeGuess(guess, currQuestion.id);
  };

  if (!currQuestion) return <div>Preparing deck...</div>;
  return (
    <QuestionCard
      currQuestion={currQuestion}
      onSubmit={onSubmit}
      nextQuestion={nextQuestion}
    />
  );
};

Play.propTypes = {};

export default Play;
