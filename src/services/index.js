const API_PLANETS = 'https://swapi.dev/api/planets';

export default async function getPlanets() {
  try {
    const response = await fetch(API_PLANETS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('API REQUEST ERROR: ', error);
  }
}
