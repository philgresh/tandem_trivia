import React, { useEffect } from 'react';
import { QuestionCard } from '../organisms';
import { useRound } from '../logic';

const Play = () => {
  const { currQuestion, makeGuess, startNewRound, nextQuestion } = useRound();
  useEffect(() => {
    startNewRound();
  }, []);

  const onSubmit = (guess) => makeGuess(guess, currQuestion.id);

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
