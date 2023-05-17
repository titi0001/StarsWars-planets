import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import data from './mocks'
import App from '../App';

describe('Testa o componente Star Wars Planet', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(data),
    });
  })
  it('Se a api renderiza na tela ', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/tatooine/i)).toBeInTheDocument();
    })

    const planets = data.results.map(({ name }) => name);

    planets.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    })
  });

  it('Testa se os elementos de estão na tela', async () => {
    render(<App />);

    expect(screen.getByTestId(/name-filter/i)).toBeInTheDocument();
    expect(screen.getByTestId(/column-filter/i)).toBeInTheDocument();
    expect(screen.getByTestId(/comparison-filter/i)).toBeInTheDocument();
    expect(screen.getByTestId(/value-filter/i)).toBeInTheDocument();
    expect(screen.getByTestId(/button-filter/i)).toBeInTheDocument();
    expect(screen.getByTestId(/button-remove-filters/i)).toBeInTheDocument();
    expect(screen.getByRole('columnheader', {  name: /name/i})).toBeInTheDocument();
  });
  it('Testa as opções de filtragem', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/tatooine/i)).toBeInTheDocument();
    })
    const planetNameFilter = screen.getByTestId(/name-filter/i);
    const columnFilter = screen.getByTestId(/column-filter/i);
    const comparisonFilter = screen.getByTestId(/comparison-filter/i);
    const valueFilter = screen.getByTestId(/value-filter/i);
    const buttonFilter = screen.getByTestId(/button-filter/i);

    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'population');
    userEvent.selectOptions(comparisonFilter, 'menor que');
    userEvent.type(valueFilter, '2000000000');
    userEvent.click(buttonFilter);

    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'orbital_period');
    userEvent.selectOptions(comparisonFilter, 'igual a');
    userEvent.type(valueFilter, '304');
    userEvent.click(buttonFilter);

    userEvent.clear(valueFilter);
    userEvent.selectOptions(columnFilter, 'diameter');
    userEvent.selectOptions(comparisonFilter, 'maior que');
    userEvent.type(valueFilter, '4818');
    userEvent.click(buttonFilter);

    userEvent.type(planetNameFilter, 'abc');
    const planetList = screen.getAllByRole('columnheader', {  name: /name/i});
    expect(planetList).toHaveLength(1);
  });
});