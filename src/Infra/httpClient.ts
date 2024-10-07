import { Axios } from 'axios';

const httpClient = new Axios({
  baseURL: 'https://swapi.dev/api/',
  transformResponse: (response) => JSON.parse(response)
});

export { httpClient };
