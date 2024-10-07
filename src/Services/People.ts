import { httpClient } from '../Infra/httpClient';

const getPeopleByName = async (name: string) => {
  const response = (await httpClient.get(`people?search=${name}`)).data;
  return response;
};

const getPeopleById = async (id: string) => {
  const response = (await httpClient.get(id)).data;
  return response;
};

export { getPeopleByName, getPeopleById };
