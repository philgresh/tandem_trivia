import * as React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import Button from '../components/atoms/Button';

describe('Button atom', () => {
  const onClick = jest.fn();
  let button;

  beforeEach(() => {
    render(<Button onClick={onClick} />);
    button = getByTestId(document.documentElement, 'button');
  });

  test('renders in the document', () => {
    expect(button).toBeInTheDocument();
  });

  test('is clickable', () => {
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick).toHaveBeenCalled();
  });
});
