import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const sidebarLinks = [
  {
    to: '/play',
    title: 'New Round',
  },
];

const Links = () =>
  sidebarLinks.map(({ to, title }) => (
    <NavLink key={to} to={to} activeClassName="selected">
      {title}
    </NavLink>
  ));

const SideNavbar = ({ open, toggle }) => {
  return (
    <>
      <div className={`sidenav ${open ? '' : 'hidden'}`}>
        <Links />
      </div>
      <div
        className={`sidenav-background ${open ? '' : 'hidden'}`}
        onClick={toggle}
        role="presentation"
      />
    </>
  );
};

SideNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default SideNavbar;
