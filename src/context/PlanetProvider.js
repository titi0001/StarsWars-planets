import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import getPlanets from '../services';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getListPlanets = async () => {
      const { results } = await getPlanets();
      const resultsFilters = results.filter((info) => delete info.residents);
      setPlanets(resultsFilters);
    };
    getListPlanets();
  }, []);

  const contextValue = { planets };

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
