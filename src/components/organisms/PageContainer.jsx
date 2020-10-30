import React from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ children, navBar }) => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        {navBar}
        <div id="spacer" />
        {children}
      </div>
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  navBar: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PageContainer;
