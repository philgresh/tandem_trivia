import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import Scoreboard from '../components/atoms/Scoreboard';
import { initialScore } from '../components/logic/useRound';

describe('Scoreboard atom', () => {
  render(<Scoreboard score={initialScore} />);
  let scoreboard = getByTestId(document.documentElement, 'scoreboard');

  test('renders in the document', () => {
    expect(scoreboard).toBeInTheDocument();
  });

  test('displays the initial score correctly', () => {
    render(<Scoreboard score={initialScore} />);

    scoreboard = getByTestId(document.documentElement, 'scoreboard');
    const correctScore = scoreboard.querySelector('div.correct');

    expect(correctScore).toHaveTextContent(initialScore.correct);
  });

  const newScore = {
    ...initialScore,
    correct: 7,
    incorrect: 3,
  };

  test('displays the current correct score', () => {
    render(<Scoreboard score={newScore} />);

    scoreboard = getByTestId(document.documentElement, 'scoreboard');
    const correctScore = scoreboard.querySelector('span.correct');

    expect(correctScore).toHaveTextContent(newScore.correct);
  });

  test('displays the current incorrect score', () => {
    render(<Scoreboard score={newScore} />);

    scoreboard = getByTestId(document.documentElement, 'scoreboard');
    const incorrectScore = scoreboard.querySelector('span.incorrect');

    expect(incorrectScore).toHaveTextContent(newScore.incorrect);
  });
});
