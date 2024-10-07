import { httpClient } from '../Infra/httpClient';

const getFilmsByName = async (name: string) => {
  const response = (await httpClient.get(`films?search=${name}`)).data;
  return response;
};

const getFilmsByUrl = async (url: string) => {
  const response = await fetch(url, { method: 'GET' });
  return response.json();
};

export { getFilmsByName, getFilmsByUrl };
