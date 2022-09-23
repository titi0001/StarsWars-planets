import React from 'react';
import './App.css';
import PlanetList from './components/PlanetList';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <main>
        <header>
          <PlanetList />
        </header>
        <section>
          <div />
        </section>
      </main>
    </PlanetProvider>
  );
}

export default App;
