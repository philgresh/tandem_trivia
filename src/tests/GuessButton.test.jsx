import * as React from 'react';
import { getByTestId, render, act } from '@testing-library/react';
import { GuessButton } from '../components/atoms';

describe('GuessButton atom', () => {
  const onSubmit = jest.fn();

  render(<GuessButton onSubmit={onSubmit} />);
  let button = getByTestId(document.documentElement, 'guess-button');

  test('renders in the document', () => {
    expect(button).toBeInTheDocument();
  });

  test('is not initially clickable (disabled)', () => {
    render(<GuessButton onSubmit={onSubmit} />);
    button = getByTestId(document.documentElement, 'guess-button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onSubmit).not.toHaveBeenCalled();
  });

  test('does not initially have "submitted" or "last-question" classNames', () => {
    expect(button).not.toHaveClass('submitted');
    expect(button).not.toHaveClass('last-question');
    expect(button).toHaveTextContent('Choose the correct answer!');
    expect(button).toBeDisabled();
  });

  describe('has the right content given conditions', () => {
    let submitted = false;
    let selected = false;
    let lastQuestion = false;

    test('is ready to submit', () => {
      selected = true;

      render(
        <GuessButton
          onSubmit={onSubmit}
          selected={selected}
          submitted={submitted}
          lastQuestion={lastQuestion}
        />,
      );

      button = getByTestId(document.documentElement, 'guess-button');
      expect(button).not.toHaveClass('submitted');
      expect(button).not.toHaveClass('last-question');
      expect(button).toHaveTextContent('Submit');
      expect(button).not.toBeDisabled();
    });

    test('after submitting a guess', () => {
      selected = false;
      submitted = true;
      render(
        <GuessButton
          onSubmit={onSubmit}
          selected={selected}
          submitted={submitted}
          lastQuestion={lastQuestion}
        />,
      );

      button = getByTestId(document.documentElement, 'guess-button');

      expect(button).toHaveClass('submitted');
      expect(button).not.toHaveClass('last-question');
      expect(button).toHaveTextContent('Next question!');
      expect(button).not.toBeDisabled();
    });

    test('after last question', () => {
      selected = false;
      submitted = true;
      lastQuestion = true;
      render(
        <GuessButton
          onSubmit={onSubmit}
          selected={selected}
          submitted={submitted}
          lastQuestion={lastQuestion}
        />,
      );

      button = getByTestId(document.documentElement, 'guess-button');

      expect(button).toHaveClass('submitted');
      expect(button).toHaveClass('last-question');
      expect(button).toHaveTextContent('See results!');
      expect(button).not.toBeDisabled();
    });
  });
});
