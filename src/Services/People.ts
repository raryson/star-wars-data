import { httpClient } from '../Infra/httpClient';

const getPeopleByName = async (name: string) =>
  (await httpClient.get(`people?search=${name}`)).data;

export { getPeopleByName };
