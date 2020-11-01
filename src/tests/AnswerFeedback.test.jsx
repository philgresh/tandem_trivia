import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import AnswerFeedback, {
  correctResponses,
  incorrectResponses,
} from '../components/atoms/AnswerFeedback';

describe('AnswerFeedback atom', () => {
  let submitted = false;
  let isCorrect = false;
  render(<AnswerFeedback isCorrect={isCorrect} submitted={submitted} />);

  let answerFeedback = getByTestId(document.documentElement, 'answerfeedback');

  test('renders in the document', () => {
    expect(answerFeedback).toBeInTheDocument();
  });

  test('does not initially have text content', () => {
    expect(answerFeedback).not.toHaveTextContent(/\w/);
  });

  test('has text content after submitting', () => {
    submitted = true;
    render(<AnswerFeedback isCorrect={isCorrect} submitted={submitted} />);
    answerFeedback = getByTestId(document.documentElement, 'answerfeedback');
    expect(answerFeedback).toHaveTextContent(/\w/);
  });

  test('has proper text content after submitting a correct answer', () => {
    submitted = true;
    isCorrect = true;
    render(<AnswerFeedback isCorrect={isCorrect} submitted={submitted} />);
    answerFeedback = getByTestId(document.documentElement, 'answerfeedback');
    const hasValidPhrase = correctResponses.includes(
      answerFeedback.textContent,
    );
    expect(hasValidPhrase).toBeTruthy();
    expect(answerFeedback).toHaveTextContent(/\w/);
  });

  test('has proper text content after submitting an incorrect answer', () => {
    submitted = true;
    isCorrect = false;
    render(<AnswerFeedback isCorrect={isCorrect} submitted={submitted} />);
    answerFeedback = getByTestId(document.documentElement, 'answerfeedback');
    const hasValidPhrase = incorrectResponses.includes(
      answerFeedback.textContent,
    );
    expect(hasValidPhrase).toBeTruthy();
    expect(answerFeedback).toHaveTextContent(/\w/);
  });
});
