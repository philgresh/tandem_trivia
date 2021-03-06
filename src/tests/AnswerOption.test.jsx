import * as React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { AnswerOption } from '../components/atoms';

const question = {
  question: 'What was Tandem previous name?',
  incorrect: ['Tandem', 'Burger Shack', 'Extraordinary Humans'],
  correct: 'Devmynd',
  id: 1,
  answers: ['Extraordinary Humans', 'Tandem', 'Devmynd', 'Burger Shack'],
};

describe('AnswerOption atom', () => {
  const thisAnswer = question.correct;
  const onChange = jest.fn();

  render(
    <AnswerOption
      answer={thisAnswer}
      onChange={onChange}
      isCorrect={false}
      submitted={false}
      selected={false}
    />,
  );
  let answerOption = getByTestId(document.documentElement, 'answer-option');

  test('renders in the document', () => {
    expect(answerOption).toBeInTheDocument();
  });

  test('has text content', () => {
    expect(answerOption).toHaveTextContent(/\w/);
  });

  test('does not initially have selected, in/correct classnames', () => {
    expect(answerOption).not.toHaveClass('selected');
    expect(answerOption).not.toHaveClass('correct');
    expect(answerOption).not.toHaveClass('incorrect');
  });

  test('has "selected" classname after clicking', () => {
    render(
      <AnswerOption
        answer={thisAnswer}
        onChange={onChange}
        submitted={false}
        isCorrect={false}
        selected
      />,
    );

    answerOption = getByTestId(document.documentElement, 'answer-option');

    expect(answerOption).toHaveClass('selected');
    expect(answerOption).not.toHaveClass('correct');
    expect(answerOption).not.toHaveClass('incorrect');
  });

  test('has "incorrect" classname after submitting an incorrect guess', () => {
    render(
      <AnswerOption
        answer={thisAnswer}
        onChange={onChange}
        isCorrect={false}
        submitted
        selected
      />,
    );

    answerOption = getByTestId(document.documentElement, 'answer-option');
    expect(answerOption).toHaveClass('selected');
    expect(answerOption).not.toHaveClass('correct');
    expect(answerOption).toHaveClass('incorrect');
  });

  test('has "correct" classname after submitting a correct guess', () => {
    render(
      <AnswerOption
        answer={thisAnswer}
        onChange={onChange}
        isCorrect
        submitted
        selected
      />,
    );

    answerOption = getByTestId(document.documentElement, 'answer-option');
    expect(answerOption).toHaveClass('selected');
    expect(answerOption).toHaveClass('correct');
    expect(answerOption).not.toHaveClass('incorrect');
  });
});
