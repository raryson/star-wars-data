import { getFilmsByName } from "./Films";
import { httpClient } from "../Infra/httpClient";

describe('getFilmsByName', () => {
  it('should call films?search=Empire', async () => {
    httpClient.get = jest.fn().mockResolvedValue({data: {}})
    await getFilmsByName('Empire')
    expect(httpClient.get).toHaveBeenCalledWith("films?search=Empire")
  })
})