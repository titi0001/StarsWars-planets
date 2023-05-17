import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function FilterTableInput() {
  const { filterName, setFilterName } = useContext(FilterContext);

  return (

    <div>
      <label htmlFor="filter-name">
        <input
          data-testid="name-filter"
          type="text"
          id="filter-name"
          name="filter-name"
          value={ filterName.name }
          onChange={ ({ target: { value } }) => setFilterName(value) }
        />
      </label>
    </div>
  );
}

export default FilterTableInput;
