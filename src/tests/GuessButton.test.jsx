import * as React from 'react';
import { getByTestId, render, act } from '@testing-library/react';
import { GuessButton } from '../components/atoms';

describe('GuessButton atom', () => {
  const onClick = jest.fn();

  render(<GuessButton onClick={onClick} />);
  let button = getByTestId(document.documentElement, 'guess-button');

  test('renders in the document', () => {
    expect(button).toBeInTheDocument();
  });

  test('is clickable', () => {
    render(<GuessButton onClick={onClick} />);
    button = getByTestId(document.documentElement, 'guess-button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick).toHaveBeenCalled();
  });

  test('does not initially have "submitted" or "last-question" classNames', () => {
    expect(button).not.toHaveClass('submitted');
    expect(button).not.toHaveClass('last-question');
    expect(button).toHaveTextContent('Submit Answer');
  });

  test('has "submitted" classNames after submitting a guess', () => {
    render(<GuessButton onClick={onClick} submitted />);

    button = getByTestId(document.documentElement, 'guess-button');

    expect(button).toHaveClass('submitted');
    expect(button).not.toHaveClass('last-question');
    expect(button).toHaveTextContent('Next Question');
  });

  test('has "last-question" classname after submitting the last question', () => {
    render(<GuessButton onClick={onClick} submitted lastQuestion />);

    button = getByTestId(document.documentElement, 'guess-button');

    expect(button).toHaveClass('submitted');
    expect(button).toHaveClass('last-question');
    expect(button).toHaveTextContent('See results!');
  });
});
