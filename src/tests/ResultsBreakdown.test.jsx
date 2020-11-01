import React from 'react';
import { findByTestId, getByTestId, render } from '@testing-library/react';
import ResultsBreakdown from '../components/atoms/ResultsBreakdown';
import { initialScore } from '../components/logic/useRound';

const firstQuestion = {
  question: 'What was Tandem previous name?',
  incorrect: ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
  correct: 'Devmynd',
  id: 1,
  answers: ['Extraordinary Humans', 'Tandem', 'Devmynd', 'Burger Shack'],
};

const correctHistoryEntry = Object.freeze({
  questionId: firstQuestion.id,
  guess: firstQuestion.correct,
  isCorrect: true,
});

const incorrectHistoryEntry = Object.freeze({
  questionId: firstQuestion.id,
  guess: firstQuestion.incorrect[0],
  isCorrect: false,
});

describe('ResultsBreakdown atom', () => {
  render(<ResultsBreakdown score={initialScore} />);
  let resultsBoard = getByTestId(document.documentElement, 'resultsboard');

  test('renders in the document', () => {
    expect(resultsBoard).toBeInTheDocument();
  });

  let newScore = {
    correct: 1,
    incorrect: 0,
    history: [correctHistoryEntry],
  };

  test('properly displays a correctly-answered question', () => {
    render(<ResultsBreakdown score={initialScore} />);
    resultsBoard = getByTestId(document.documentElement, 'resultsboard');

    const responseObj = resultsBoard.querySelector('.response');
    expect(responseObj).toHaveTextContent(firstQuestion.question);
    expect(responseObj).toHaveTextContent(firstQuestion.question);
  });

  newScore = {
    correct: 0,
    incorrect: 1,
    history: [incorrectHistoryEntry],
  };
});
