import { IInfoRequest } from '../Components/InfoSelect';
import { httpClient } from '../Infra/httpClient';

const getPeopleByName = async (name: string) => {
  const response = (await httpClient.get(`people?search=${name}`)).data as IInfoRequest;
  return response;
};

const getPeopleByUrl = async (url: string) => {
  const response = await fetch(url, { method: 'GET' });
  return response.json();
};

export { getPeopleByName, getPeopleByUrl };
