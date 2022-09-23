import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import getPlanets from '../services';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getListPlanets = async () => {
      try {
        const { results } = await getPlanets();
        setPlanets(results);
      } catch (e) {
        setError(e.message);
      }
    };
    getListPlanets();
  }, []);
  const contextValue = { planets, error,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetProvider;
