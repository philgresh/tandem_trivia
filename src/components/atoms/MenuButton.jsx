import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const MenuButton = ({ color, ...rest }) => (
  <Button {...rest} className="menu-button" dataTestId="menu-button">
    <FontAwesomeIcon icon={faBars} color={color} />
  </Button>
);

MenuButton.propTypes = {
  color: PropTypes.string,
};

MenuButton.defaultProps = {
  color: 'inherit',
};

export default MenuButton;
