import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useRound from './useRound';

const RoundContext = createContext();

const RoundContextProvider = ({ children }) => {
  const round = useRound();
  return (
    <RoundContext.Provider value={{ ...round }}>
      {children}
    </RoundContext.Provider>
  );
};

RoundContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RoundContextProvider;
export { RoundContext };
