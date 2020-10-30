import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useRound, {
  initialScore,
  scoreReducer,
  CORRECT,
  INCORRECT,
} from '../components/logic/useRound';

const questions = [
  {
    question: 'What was Tandem previous name?',
    incorrect: ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
    correct: 'Devmynd',
  },
  {
    question:
      "In Shakespeare's play Julius Caesar, Caesar's last words were...",
    incorrect: ['Iacta alea est!', 'Vidi, vini, vici', 'Aegri somnia vana'],
    correct: 'Et tu, Brute?',
  },
  {
    question: 'A group of tigers are referred to as:',
    incorrect: ['Chowder', 'Pride', 'Destruction'],
    correct: 'Ambush',
  },
];

const initialScoreExpectation = Object.freeze({
  correct: 0,
  incorrect: 0,
  history: [],
});

function setupTestComponent(...args) {
  const returnVal = {};
  function TestComponent() {
    Object.assign(returnVal, useRound(...args));
    return null;
  }
  render(<TestComponent />);
  return returnVal;
}

const mockFetchQuestions = jest.fn();
mockFetchQuestions.mockResolvedValue(questions);

describe('scoreReducer', () => {
  test('initialScore is empty', () => {
    expect(initialScore).toMatchObject(initialScoreExpectation);
  });

  let newState = initialScore;

  test('correct guess returns correct state', () => {
    // const question = 'What was Tandem previous name?';
    const guess = 'Devmynd';
    const isCorrect = true;
    const action = {
      guess,
      isCorrect,
      type: CORRECT,
    };
    newState = scoreReducer(newState, action);
    expect(newState).toHaveProperty('correct', 1);
    expect(newState).toHaveProperty('incorrect', 0);
    expect(newState.history).toHaveLength(1);
  });

  test('incorrect guess returns correct state', () => {
    // const question = 'What was Tandem previous name?';
    const guess = 'Devmynd';
    const isCorrect = false;
    const action = {
      guess,
      isCorrect,
      type: INCORRECT,
    };
    newState = scoreReducer(newState, action);
    expect(newState).toHaveProperty('correct', 1);
    expect(newState).toHaveProperty('incorrect', 1);
    expect(newState.history).toHaveLength(2);
  });

  test('empty action returns state to initialScore', () => {
    newState = scoreReducer(newState);
    expect(initialScore).toMatchObject(initialScoreExpectation);
  });
});

describe('useRound', () => {
  let result;
  let waitForNextUpdate;
  let newScore = { ...initialScoreExpectation };
  beforeEach(() => {
    // Unfortunately I can't seem to maintain a single-state during testing.
    // All tests here have to be re-initialized with startNewRound.
    ({ result, waitForNextUpdate } = renderHook(() => useRound(questions)));
  });

  test('starts with correct initial values', () => {
    expect(result.current.score).toMatchObject(initialScoreExpectation);
    expect(result.current.currQuestion).toBeNull();
  });

  test('a new round can be started', async () => {
    result.current.startNewRound();
    await waitForNextUpdate();

    // assert new state
    expect(result.current.score).toMatchObject(initialScoreExpectation);
    expect(result.current.currQuestion).toHaveProperty('answers');
  });

  test('a correct guess updates state successfully', async () => {
    await act(async () => {
      result.current.startNewRound();
    });

    const { correct, id } = result.current.currQuestion;
    await act(async () => {
      result.current.makeGuess(correct, id);
    });

    newScore = {
      correct: 1,
      incorrect: 0,
      history: [
        {
          questionId: id,
          guess: correct,
          isCorrect: true,
        },
      ],
    };

    expect(result.current.score).toMatchObject(newScore);
  });

  test('an incorrect guess updates state successfully', async () => {
    await act(async () => {
      result.current.startNewRound();
    });

    const { incorrect, id } = result.current.currQuestion;
    const incorrectGuess = incorrect[0];
    await act(async () => {
      result.current.makeGuess(incorrectGuess, id);
    });

    expect(result.current.score).toMatchObject({
      correct: 0,
      incorrect: newScore.incorrect + 1,
      history: [
        {
          questionId: id,
          guess: incorrectGuess,
          isCorrect: false,
        },
      ],
    });
  });
});
