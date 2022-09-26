import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

function FilterTableSelected() {
  const {
    selected,
    setSelected,
    columnFilter,
    setColumnFilter,
    comparison,
    selectedFilters,
    setSelectedFilters,
  } = useContext(FilterContext);

  const removeColumn = (columns) => !columnFilter
    .find((filtro) => columns === filtro.column);

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
          comparison.filter(removeColumn).map((element) => (
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
            setColumnFilter(columnFilter
              .filter((option) => option !== selected.column));
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
          <div
            data-testid="filter"
            className="selectedFilters"
            key={ index }
          >
            <button
              type="button"
              onClick={ () => {
                const cloneArray = [...selectedFilters];
                cloneArray.splice(index, 1);
                setSelectedFilters(cloneArray);
              } }
            >
              𝙭
            </button>
            <span>
              {filter.column}
              {' '}
              {filter.condition}
              {' '}
              {filter.value}
            </span>
          </div>
        ))}
        <button
          data-testid="button-remove-filters"
          type="button"
          className="clear"
          onClick={ () => {
            setSelectedFilters([]);
            setSelected({
              column: '',
              condition: '',
              value: '',
            });
          } }
        >
          LIMPAR
        </button>
      </div>
    </div>
  );
}

export default FilterTableSelected;
