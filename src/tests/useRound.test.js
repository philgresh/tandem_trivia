// import { renderHook, act } from '@testing-library/react-hooks';
import {
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
