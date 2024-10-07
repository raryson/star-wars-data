import SearchPage from '.';
import { render, fireEvent, act } from '@testing-library/react';
import { getPeopleByName } from '../../Services/People';
import { getFilmsByName } from '../../Services/Films';

jest.mock('../../Services/People');
jest.mock('../../Services/Films');

describe('Search', () => {
  it('should call service people when has people selected', async () => {
    const renderizedPage = render(
      <SearchPage setRequestData={jest.fn()} setIsLoading={jest.fn()} />
    );
    const peopleRadio = renderizedPage.getByDisplayValue('People');
    await act(async () => {
      fireEvent.click(peopleRadio);
    });

    const peopleInput = renderizedPage.getByPlaceholderText('e.g Chewbacca, Yoda, Boba Fett');
    await act(async () => {
      fireEvent.change(peopleInput, { target: { value: 'Yoda' } });
    });

    const searchButton = renderizedPage.getByText('Search');
    await act(async () => {
      fireEvent.click(searchButton);
    });
    expect(getPeopleByName).toHaveBeenCalledWith('Yoda');
  });

  it('should call service films when has films selected', async () => {
    const renderizedPage = render(
      <SearchPage setRequestData={jest.fn()} setIsLoading={jest.fn()} />
    );
    const peopleRadio = renderizedPage.getByDisplayValue('Movies');
    await act(async () => {
      fireEvent.click(peopleRadio);
    });

    const peopleInput = renderizedPage.getByPlaceholderText(
      'e.g A New Hope, The Empire Strike Back'
    );
    await act(async () => {
      fireEvent.change(peopleInput, { target: { value: 'Empire' } });
    });

    const searchButton = renderizedPage.getByText('Search');
    await act(async () => {
      fireEvent.click(searchButton);
    });
    expect(getFilmsByName).toHaveBeenCalledWith('Empire');
  });
});
