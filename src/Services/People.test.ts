import { httpClient } from '../Infra/httpClient';
import { getPeopleByName, getPeopleByUrl } from './People';

describe('getPeopleByName', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  const mockResponse = {
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    redirected: false,
    url: 'https://example.com',
    json: async () => Promise.resolve({ data: 'test' }),
  } as Response;
  
  it('should call people?search=Yoda', async () => {
    httpClient.get = jest.fn().mockResolvedValue({ data: {} });
    await getPeopleByName('Yoda');
    expect(httpClient.get).toHaveBeenCalledWith('people?search=Yoda');
  });

  it('should call entire url', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.resolve(mockResponse)
    ) as jest.Mock;
    const fakeUrl = 'https://swapi.dev/api/people';
    await getPeopleByUrl(fakeUrl);
    expect(global.fetch).toHaveBeenCalled();
  });
});
