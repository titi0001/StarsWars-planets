import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';

function FilterProvider({ children }) {
  const [filterName, setFilterName] = useState('');

  const [columnFilter, setColumnFilter] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [comparison, setComparison] = useState([
    'maior que',
    'menor que',
    'igual a',
  ]);

  const [selected, setSelected] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const [selectedFilters, setSelectedFilters] = useState([]);

  const contextValue = {
    filterName,
    setFilterName,
    selected,
    setSelected,
    selectedFilters,
    setSelectedFilters,
    columnFilter,
    setColumnFilter,
    comparison,
    setComparison,
  };

  return (
    <FilterContext.Provider value={ contextValue }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default FilterProvider;
