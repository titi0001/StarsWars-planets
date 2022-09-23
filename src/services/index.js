const API_PLANETS = 'https://swapi.dev/api/planets';

export default async function getPlanets() {
  const response = await fetch(API_PLANETS);
  const data = await response.json();
  return data;
}
