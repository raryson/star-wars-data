import { httpClient } from '../Infra/httpClient';

const getFilmsByName = async (name: string) => (await httpClient.get(`films?search=${name}`)).data;

export { getFilmsByName };
