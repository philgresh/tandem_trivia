import * as React from 'react';
import { getByTestId, render } from '@testing-library/react';
import { act } from 'react-test-renderer';
import MenuButton from '../components/atoms/MenuButton';

describe('MenuButton atom', () => {
  const onClick = jest.fn();
  let button;

  beforeEach(() => {
    render(<MenuButton onClick={onClick} />);
    button = getByTestId(document.documentElement, 'menu-button');
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
