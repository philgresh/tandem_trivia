import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 1rem;

  & .main-container {
    max-width: 800px;
    display: block;
    margin: 0 auto;
    height: calc(100vh - 7.5rem);
    padding: 0 1rem;
  }
`;

const Main = ({ children }) => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <div id="spacer" />
        <StyledMain>{children}</StyledMain>
      </div>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
