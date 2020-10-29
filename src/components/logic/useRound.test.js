// import { renderHook, act } from '@testing-library/react-hooks';
import { initialScore, scoreReducer, CORRECT, INCORRECT } from './useRound';

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

const mockFetchQuestions = jest.fn();
mockFetchQuestions.mockResolvedValue(questions);

describe('scoreReducer', () => {
  test('initialScore is empty', () => {
    expect(initialScore).toHaveProperty('correct', 0);
    expect(initialScore).toHaveProperty('incorrect', 0);
    expect(initialScore).toHaveProperty('history', []);
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
    expect(initialScore).toHaveProperty('correct', 0);
    expect(initialScore).toHaveProperty('incorrect', 0);
    expect(initialScore).toHaveProperty('history', []);
  });
});

// describe('useRound hook', () => {
//   const { result } = renderHook(() => useRound(questions));
//   const { score, currQuestion, startNewGame, makeGuess } = result.current;

//   test('startNewGame initializes a blank game with a currQuestion',
// async () => {
//     await act(async () => startNewGame());

//     expect(result.current.score).toMatchObject({
//       correct: 0,
//       incorrect: 0,
//       history: [],
//     });
//   });

//   test('currQuestion is a valid question object', () => {
//     expect(currQuestion).toMatchObject({
//       id: 0,
//       question: 'What was Tandem previous name?',
//       incorrect: ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
//       correct: 'Devmynd',
//     });
//   });

//   test('score returns initialScore', () => {
//     expect(score).toMatchObject({
//       correct: 0,
//       incorrect: 0,
//       history: [],
//     });
//   });

//   describe('makeGuess', () => {
//     test('making a guess', () => {});
//   });
// });
