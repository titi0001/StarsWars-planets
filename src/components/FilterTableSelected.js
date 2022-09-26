import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function FilterTableSelected() {
  const {
    selected,
    setSelected,
    columnFilter,
    comparison,
    selectedFilters,
    setSelectedFilters,
  } = useContext(FilterContext);

  return (

    <div>
      <select
        data-testid="column-filter"
        value={ selected.column }
        onChange={
          ({ target: { value } }) => setSelected({ ...selected, column: value })
        }
      >
        {
          columnFilter.map((element) => (
            <option key={ element }>{ element }</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ selected.comparison }
        onChange={
          ({ target: { value } }) => setSelected({ ...selected, comparison: value })
        }
      >
        {
          comparison.map((element) => (
            <option key={ element }>{ element }</option>
          ))
        }
      </select>
      <label htmlFor="valueFilter">
        <input
          data-testid="value-filter"
          placeholder="Digite o valor"
          type="number"
          id="valueFilter"
          name="valueFilter"
          value={ selected.value }
          onChange={
            ({ target: { value } }) => setSelected({ ...selected, value })
          }
        />
      </label>
      <div className="buttons">
        <button
          type="button"
          className="add"
          data-testid="button-filter"
          onClick={ () => {
            setSelectedFilters([...selectedFilters, selected]);
            setSelected({
              column: 'population',
              comparison: 'maior que',
              value: '0',
            });
          } }
        >
          FILTRAR
        </button>
        {selectedFilters.map((filter, index) => (
          <div className="selectedFilters" key={ index }>
            <span>
              {filter.column}
              {' '}
              {filter.condition}
              {' '}
              {filter.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterTableSelected;
