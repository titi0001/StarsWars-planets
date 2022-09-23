import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function PlanetList() {
  const { planets } = useContext(PlanetContext);

  const planetsTable = planets.map((planet, index) => (
    <tr key={ index }>
      {Object.values(planet).map((value, indexValue) => (
        <td key={ indexValue }>
          {value}
        </td>
      ))}
    </tr>
  ));

  return (
    <div>
      <table>
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
      </table>
      <table>
        <tbody>
          {planetsTable}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetList;
