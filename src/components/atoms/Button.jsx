import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ styleProps }) => styleProps.color};
  background-color: ${({ styleProps }) => styleProps.backgroundColor};
  padding: ${({ styleProps }) => styleProps.padding};
`;

const Button = (props) => {
  const { styleProps, dataTestId, ...rest } = props;
  return (
    <StyledButton
      styleProps={styleProps}
      data-testid={dataTestId}
      className={dataTestId}
      {...rest}
    />
  );
};

Button.propTypes = {
  styleProps: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    padding: PropTypes.string,
  }),
  dataTestId: PropTypes.string,
};

Button.defaultProps = {
  styleProps: {
    color: 'inherit',
    backgroundColor: 'transparent',
    padding: '0.5rem',
  },
  dataTestId: 'button',
};

export default Button;
