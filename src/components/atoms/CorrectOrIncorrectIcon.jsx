import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const CorrectOrIncorrectIcon = ({ isCorrect }) => {
  if (isCorrect) return <FontAwesomeIcon icon={faCheck} color="inherit" />;
  return <FontAwesomeIcon icon={faTimes} color="inherit" />;
};

CorrectOrIncorrectIcon.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
};

export default CorrectOrIncorrectIcon;
