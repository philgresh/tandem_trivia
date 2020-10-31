import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SideNavbar } from '../components/atoms';

describe('NavbarTitle atom', () => {
  let open = false;
  const toggle = () => {
    open = !open;
  };

  render(
    <BrowserRouter>
      <SideNavbar toggle={toggle} open={open} />
    </BrowserRouter>,
  );

  let sideNavbar = getByTestId(document.documentElement, 'sidenav');
  test('renders in the document', () => {
    expect(sideNavbar).toBeInTheDocument();
  });

  test('has text content', () => {
    expect(sideNavbar).toHaveTextContent(/\w/);
  });

  test('is initially hidden', () => {
    expect(sideNavbar).toHaveClass('hidden');
  });

  test('appears after being toggled', () => {
    toggle();
    render(
      <BrowserRouter>
        <SideNavbar toggle={toggle} open={open} />
      </BrowserRouter>,
    );
    sideNavbar = getByTestId(document.documentElement, 'sidenav');
    const background = getByTestId(
      document.documentElement,
      'sidenav-background',
    );

    expect(sideNavbar).not.toHaveClass('hidden');
    expect(background).not.toHaveClass('hidden');
  });

  test('closes after clicking into the background', () => {
    const mockToggle = jest.fn();
    render(
      <BrowserRouter>
        <SideNavbar toggle={mockToggle} open={open} />
      </BrowserRouter>,
    );
    sideNavbar = getByTestId(document.documentElement, 'sidenav');
    const background = getByTestId(
      document.documentElement,
      'sidenav-background',
    );

    userEvent.click(background);
    expect(mockToggle).toHaveBeenCalled();
  });
});
