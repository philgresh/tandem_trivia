import React, { useEffect } from 'react';
import { QuestionCard } from '../../organisms';
import { useRound } from '../../logic';

const NewRound = () => {
  const { currQuestion, makeGuess, startNewRound, nextQuestion } = useRound();
  useEffect(() => {
    startNewRound();
  }, []);

  const onSubmit = (guess, questionId) => {
    return makeGuess(guess, questionId);
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

NewRound.propTypes = {};

export default NewRound;
