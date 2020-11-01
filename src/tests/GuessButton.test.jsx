import * as React from 'react';
import { getByTestId, render, act } from '@testing-library/react';
import GuessButton, {
  getButtonAttrs,
  TEXT_INITIAL,
  TEXT_READY_TO_SUBMIT,
  TEXT_SUBMITTED,
  TEXT_AFTER_LAST_QUESTION,
} from '../components/atoms/GuessButton';

describe('GuessButton atom', () => {
  const onClick = jest.fn();

  render(<GuessButton onClick={onClick} />);
  let button = getByTestId(document.documentElement, 'guess-button');

  test('renders in the document', () => {
    expect(button).toBeInTheDocument();
  });

  test('is not initially clickable (disabled)', () => {
    render(<GuessButton onClick={onClick} />);
    button = getByTestId(document.documentElement, 'guess-button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick).not.toHaveBeenCalled();
  });

  test('does not initially have "submitted" or "last-question" classNames', () => {
    expect(button).not.toHaveClass('submitted');
    expect(button).not.toHaveClass('last-question');
    expect(button).toHaveTextContent(TEXT_INITIAL);
    expect(button).toBeDisabled();
  });

  describe('getButtonAttrs functions correctly', () => {
    let selected = false;
    let submitted = false;
    let lastQuestion = false;

    test('initial state', () => {
      const { disabled, text } = getButtonAttrs({
        selected,
        submitted,
        lastQuestion,
      });
      expect(disabled).toEqual(true);
      expect(text).toEqual(TEXT_INITIAL);
    });

    test('ready to submit', () => {
      selected = true;
      const { disabled, text } = getButtonAttrs({
        selected,
        submitted,
        lastQuestion,
      });
      expect(disabled).toEqual(false);
      expect(text).toEqual(TEXT_READY_TO_SUBMIT);
    });

    test('submitted (receive feedback)', () => {
      selected = true;
      submitted = true;

      const { disabled, text } = getButtonAttrs({
        selected,
        submitted,
        lastQuestion,
      });
      expect(disabled).toEqual(false);
      expect(text).toEqual(TEXT_SUBMITTED);
    });

    test('submitted, after last question', () => {
      selected = true;
      submitted = true;
      lastQuestion = true;

      const { disabled, text } = getButtonAttrs({
        selected,
        submitted,
        lastQuestion,
      });
      expect(disabled).toEqual(false);
      expect(text).toEqual(TEXT_AFTER_LAST_QUESTION);
    });
  });

  describe('has the right content given conditions', () => {
    let submitted = false;
    let selected = false;
    let lastQuestion = false;

    test('is ready to submit', () => {
      selected = true;

      render(
        <GuessButton
          onClick={onClick}
          selected={selected}
          submitted={submitted}
          lastQuestion={lastQuestion}
        />,
      );

      button = getByTestId(document.documentElement, 'guess-button');
      expect(button).not.toHaveClass('submitted');
      expect(button).not.toHaveClass('last-question');
      expect(button).toHaveTextContent(TEXT_READY_TO_SUBMIT);
      expect(button).not.toBeDisabled();
    });

    test('after submitting a guess', () => {
      selected = true;
      submitted = true;
      render(
        <GuessButton
          onClick={onClick}
          selected={selected}
          submitted={submitted}
          lastQuestion={lastQuestion}
        />,
      );

      button = getByTestId(document.documentElement, 'guess-button');

      expect(button).toHaveClass('submitted');
      expect(button).not.toHaveClass('last-question');
      expect(button).toHaveTextContent(TEXT_SUBMITTED);
      expect(button).not.toBeDisabled();
    });

    test('after last question', () => {
      selected = true;
      submitted = true;
      lastQuestion = true;
      render(
        <GuessButton
          onClick={onClick}
          selected={selected}
          submitted={submitted}
          lastQuestion={lastQuestion}
        />,
      );

      button = getByTestId(document.documentElement, 'guess-button');

      expect(button).toHaveClass('submitted');
      expect(button).toHaveClass('last-question');
      expect(button).toHaveTextContent(TEXT_AFTER_LAST_QUESTION);
      expect(button).not.toBeDisabled();
    });
  });
});
