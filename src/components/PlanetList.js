import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import PlanetContext from '../context/PlanetContext';
import '../styles/filter.css';

function PlanetList() {
  const { planets } = useContext(PlanetContext);
  const { filterName, selectedFilters } = useContext(FilterContext);
  console.log(selectedFilters);

  const filterPlanetName = planets
    .filter((planetName) => planetName.name
      .toLowerCase().includes(filterName.toLowerCase()));

  // const tratarDados = (linha) => {
  //   // console.info('Linha: ', linha);
  //   const bools = [];
  //   selectedFilters.forEach((filter) => {
  //     switch (filter.condition) {
  //     case 'menor que':
  //       bools.push(Number(linha[filter.column]) >= Number(filter.value));
  //       break;
  //     case 'maior que':
  //       bools.push(Number(linha[filter.column]) <= Number(filter.value));
  //       break;
  //     case 'igual a':
  //       bools.push(linha[filter.column] === filter.value.toUpperCase());
  //       break;
  //     default:
  //       return true;
  //     }
  //   });

  //   return bools.every((el) => el);
  // };

  return (
    <table role="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water </th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filterPlanetName.map(({
          name,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }) => (
          <tr key={ name }>
            <td>{name}</td>
            <td>{rotationPeriod}</td>
            <td>{orbitalPeriod}</td>
            <td>{diameter}</td>
            <td>{climate}</td>
            <td>{gravity}</td>
            <td>{terrain}</td>
            <td>{surfaceWater}</td>
            <td>{population}</td>
            <td>{films}</td>
            <td>{created}</td>
            <td>{edited}</td>
            <td>{url}</td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}

export default PlanetList;
