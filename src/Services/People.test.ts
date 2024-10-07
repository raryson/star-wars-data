import { httpClient } from '../Infra/httpClient';
import { getPeopleByName } from './People';

describe('getPeopleByName', () => {
  it('should call people?search=Yoda', async () => {
    httpClient.get = jest.fn().mockResolvedValue({ data: {} });
    await getPeopleByName('Yoda');
    expect(httpClient.get).toHaveBeenCalledWith('people?search=Yoda');
  });
});
