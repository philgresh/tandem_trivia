import * as React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { Question } from '../components/atoms';

describe('Question atom', () => {
  render(<Question question="What was Tandem previous name?" />);

  const question = getByTestId(document.documentElement, 'question');
  test('renders in the document', () => {
    expect(question).toBeInTheDocument();
  });

  test('has text content', () => {
    expect(question).toHaveTextContent(/\w/);
  });
});
