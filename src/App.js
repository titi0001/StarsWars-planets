import React from 'react';
import './App.css';
import FilterTableInput from './components/FilterTableInput';
import FilterTableSelected from './components/FilterTableSelected';
import PlanetList from './components/PlanetList';
import FilterProvider from './context/FilterProvider';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <FilterProvider>
        <main>
          <header>
            <h1>Projeto Star wars- Trybe </h1>
            <FilterTableInput />
            <div />
          </header>
          <navigator>
            <FilterTableSelected />
          </navigator>
          <section>
            <PlanetList />
          </section>
        </main>
      </FilterProvider>
    </PlanetProvider>
  );
}

export default App;
