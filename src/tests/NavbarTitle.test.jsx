import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { getByTestId, render } from '@testing-library/react';
import NavbarTitle from '../components/atoms/NavbarTitle';

describe('NavbarTitle atom', () => {
  render(
    <BrowserRouter>
      <NavbarTitle />
    </BrowserRouter>,
  );

  const navbarTitle = getByTestId(document.documentElement, 'navbar-title');
  test('renders in the document', () => {
    expect(navbarTitle).toBeInTheDocument();
  });

  test('has text content', () => {
    expect(navbarTitle).toHaveTextContent(/\w/);
  });
});
