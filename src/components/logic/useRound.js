import { useState, useReducer } from 'react';
import { fetchQuestions } from '../../utils/api';

export const CORRECT = 'CORRECT';
export const INCORRECT = 'INCORRECT';
export const ROUND_OVER = 'ROUND_OVER';

export const initialScore = Object.freeze({
  correct: 0,
  incorrect: 0,
  history: [],
});

export const scoreReducer = (state, action) => {
  Object.freeze(state);
  const newState = { ...state };
  if (!action) return initialScore;

  const newHistoryObj = {
    questionId: action.questionId,
    guess: action.guess,
    isCorrect: action.isCorrect,
  };
  newState.history = [...newState.history, newHistoryObj];

  switch (action.type) {
    case CORRECT: {
      return {
        ...newState,
        correct: newState.correct + 1,
      };
    }
    case INCORRECT: {
      return {
        ...newState,
        incorrect: newState.incorrect + 1,
      };
    }
    default:
      return initialScore;
  }
};

/**
 * Logic for running a trivia round.
 * @param {Object[]} initialQuestions - Optional loading of questions (testing).
 */
const useRound = (initialQuestions = []) => {
  const [score, dispatch] = useReducer(scoreReducer, initialScore);
  const [questions, setQuestions] = useState(initialQuestions);
  const [currQuestion, setCurrQuestion] = useState(null);

  const nextQuestion = (thisQuestionIdx) => {
    const nextIdx = thisQuestionIdx + 1;
    const roundOver = nextIdx === questions.length;
    if (roundOver) return ROUND_OVER;

    const nextQuestionObj = questions[nextIdx];
    setCurrQuestion(nextQuestionObj);
    return nextQuestionObj;
  };

  /**
   * Fetches new questions and sets score to 0/0.
   */
  const startNewRound = () =>
    fetchQuestions().then((newQuestions) => {
      setQuestions(newQuestions);
      dispatch();
      const newFirstQuestion = newQuestions[0];
      setCurrQuestion(newFirstQuestion);
      return newFirstQuestion;
    });

  /**
   * Check if a guess is correct and update the score.
   * @typedef {Function} makeGuess
   * @param {String} guess One of the answer options.
   * @param {Number} questionId Unique ID of the questions.
   * @returns {Object:{isCorrect:Boolean, correct:String, guess:String}}
   * returnObj
   */
  const makeGuess = (guess, questionId) => {
    const thisQuestionIdx = questions.findIndex((q) => q.id === questionId);

    if (thisQuestionIdx === -1)
      throw new Error(`'${questionId}' is not a valid question ID`);

    const thisQuestion = questions[thisQuestionIdx];
    const { correct } = thisQuestion;
    const isCorrect = correct === guess;
    const type = isCorrect ? CORRECT : INCORRECT;

    dispatch({ type, isCorrect, guess, questionId });

    return { isCorrect, correct, guess };
  };

  return {
    score,
    currQuestion,
    makeGuess,
    startNewRound,
    nextQuestion,
  };
};

export default useRound;
