import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  // act,
  // screen,
  getByTestId,
  render as rtlRender,
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import NavbarTitle from '../components/atoms/NavbarTitle';

describe('NavbarTitle atom', () => {
  const render = (ui, { route = '/new-round' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return rtlRender(ui, { wrapper: BrowserRouter });
  };
  render(<NavbarTitle />);

  const navbarTitle = getByTestId(document.documentElement, 'navbar-title');
  test('renders in the document', () => {
    expect(navbarTitle).toBeInTheDocument();
  });

  test('has text content', () => {
    expect(navbarTitle).toHaveTextContent(/\w/);
  });

  // // Don't know how to do this best....
  // test('routes to home page when clicked', () => {
  //   act(() => {
  //     userEvent.click(navbarTitle.parentNode);
  //   });
  //   expect(location.pathname).toBe('/');
  // });
});
