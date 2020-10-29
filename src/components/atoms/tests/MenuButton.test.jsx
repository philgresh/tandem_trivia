import * as React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import MenuButton from '../MenuButton';

describe('MenuButton atom', () => {
  const onClick = jest.fn();

  test('renders in the document', () => {
    render(<MenuButton onClick={onClick} />);
    const button = getByTestId(document.documentElement, 'menu-button');
    expect(button).toBeInTheDocument();
  });
  test('is clickable', () => {
    render(<MenuButton onClick={onClick} />);
    const button = getByTestId(document.documentElement, 'menu-button');
    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClick).toHaveBeenCalled();
  });
});
