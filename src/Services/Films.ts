import { httpClient } from '../Infra/httpClient';

const getFilmsByName = async (name: string) => {
  const response = (await httpClient.get(`films?search=${name}`)).data;
  return response;
};

export { getFilmsByName };
