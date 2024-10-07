import { getFilmsByName, getFilmsByUrl } from './Films';
import { httpClient } from '../Infra/httpClient';

describe('getFilmsByName', () => {
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
  

  it('should call films?search=Empire', async () => {
    httpClient.get = jest.fn().mockResolvedValue({ data: {} });
    await getFilmsByName('Empire');
    expect(httpClient.get).toHaveBeenCalledWith('films?search=Empire');
  });

  it('should call entire url', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.resolve(mockResponse)
    ) as jest.Mock;
    const fakeUrl = 'https://swapi.dev/api/films';
    await getFilmsByUrl(fakeUrl);
    expect(global.fetch).toHaveBeenCalled();
  });
});
