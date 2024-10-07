import { render, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PeopleDetails from './PeopleDetails';

import * as servicePeople from '../Services/People';
import * as serviceFilms from '../Services/Films';

jest.mock('../Services/People');
jest.mock('../Services/Films');

describe('PeopleDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should redirect to home when dont find a peopleDetails', async () => {
    let renderPage: any;
    await act(async () => {
      jest
        .spyOn(servicePeople, 'getPeopleByName')
        .mockResolvedValue({ count: 0, results: [] } as any);
      jest.spyOn(serviceFilms, 'getFilmsByUrl').mockResolvedValue({ count: 0, results: [] });
      renderPage = render(<PeopleDetails />, { wrapper: BrowserRouter });
    });
    expect(window.location.pathname).toBe(`/`);
  });

  it('should render brown eye from han solo ', async () => {
    let renderPage: any;
    await act(async () => {
      jest.spyOn(servicePeople, 'getPeopleByName').mockResolvedValue({
        count: 1,
        results: [{ eye_color: 'brown', films: [] } as any]
      } as any);
      jest.spyOn(serviceFilms, `getFilmsByUrl`).mockResolvedValue([{ title: `banana` }]);
      renderPage = render(<PeopleDetails />, { wrapper: BrowserRouter });
    });
    expect(renderPage.queryAllByText(/brown/).length).toBe(1);
  });
});
