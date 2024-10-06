import { Axios } from 'axios';

const httpClient = new Axios({
  baseURL: 'https://swapi.dev/api/'
});

export { httpClient };
