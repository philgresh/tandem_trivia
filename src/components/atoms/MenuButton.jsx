import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const StyledButton = styled(Button)`
  margin: 0 -0.5rem;
  font-size: 1.5rem;
`;

const MenuButton = ({ color, ...rest }) => (
  <StyledButton {...rest} dataTestId="menu-button">
    <FontAwesomeIcon icon={faBars} color={color} />
  </StyledButton>
);

MenuButton.propTypes = {
  color: PropTypes.string,
};

MenuButton.defaultProps = {
  color: 'inherit',
};

export default MenuButton;
