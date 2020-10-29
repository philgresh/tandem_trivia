import * as React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import Button from '../Button';

describe('Button atom', () => {
  test('renders in the document and is clickable', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick} />);
    expect(getByTestId(document.documentElement, 'button')).toBeInTheDocument();

    const button = document.querySelector('[data-testid="button"]');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick).toHaveBeenCalled();
  });
});
