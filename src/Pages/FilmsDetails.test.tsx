import { render, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FilmsDetails from './FilmsDetails';

import * as servicePeople from '../Services/People';
import * as serviceFilms from '../Services/Films';

jest.mock('../Services/People');
jest.mock('../Services/Films');

describe('FilmsDetails', () => {
  it('should redirect to home when dont find a film', async () => {
    let renderPage: any;
    await act(async () => {
      jest.spyOn(serviceFilms, 'getFilmsByName').mockResolvedValue({ count: 0, results: [] });
      jest.spyOn(servicePeople, `getPeopleByUrl`).mockResolvedValue({ count: 0, results: [] });
      renderPage = render(<FilmsDetails />, { wrapper: BrowserRouter });
    });
    expect(window.location.pathname).toBe(`/`);
  });

  it('should render banana film with han solo', async () => {
    let renderPage: any;
    await act(async () => {
      jest
        .spyOn(serviceFilms, 'getFilmsByName')
        .mockResolvedValue({
          count: 1,
          results: [
            { title: 'Banana', opening_crawl: `A banana history`, characters: ['Han Solo'] }
          ]
        });
      jest.spyOn(servicePeople, `getPeopleByUrl`).mockResolvedValue({ name: `Han Solo` });
      renderPage = render(<FilmsDetails />, { wrapper: BrowserRouter });
    });
    expect(renderPage.queryAllByText(`Han Solo`).length).toBe(1);
    expect(renderPage.queryAllByText(/banana/).length).toBe(1);
  });
});
