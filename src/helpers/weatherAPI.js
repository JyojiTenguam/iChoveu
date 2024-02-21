// Remova os comentários a medida que for implementando as funções
const API_TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${API_TOKEN}&q=${term}`);
    const data = await response.json();

    if (data.length === 0) {
      alert('Nenhuma cidade encontrada');
    }

    return data;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar cidades:', error);
    throw error;
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
