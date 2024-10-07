import InfoSelect, { IInfoRequest } from '.';
import { render } from '@testing-library/react';

describe('InfoSelect', () => {
  it('should render a empty message when dont have itens to show', async () => {
    const stubEmptyResponse = { count: 0 } as IInfoRequest;
    const renderizedPage = render(
      <InfoSelect infoRequestToShow={stubEmptyResponse} isLoading={false} />
    );
    expect(
      renderizedPage.getByText(/Use the form to search for People or Movies./)
    ).toBeInTheDocument();
  });

  it('should render one item when only api return one item', async () => {
    const stubEmptyResponse = {
      count: 1,
      results: [{ name: 'Luke', url: 'someUrl' }]
    } as IInfoRequest;
    const renderizedPage = render(
      <InfoSelect infoRequestToShow={stubEmptyResponse} isLoading={false} />
    );
    expect(renderizedPage.getByText(/Luke/)).toBeInTheDocument();
    expect(renderizedPage.getByText(/See Details/)).toBeInTheDocument();
    expect(renderizedPage.queryAllByText(/See Details/).length).toBe(1);
  });

  it('should render one item when only api return one item', async () => {
    const stubEmptyResponse = {
      count: 2,
      results: [
        { name: 'Luke', url: 'someUrl' },
        { name: 'Yoda', url: 'someUrl' }
      ]
    } as IInfoRequest;
    const renderizedPage = render(
      <InfoSelect infoRequestToShow={stubEmptyResponse} isLoading={false} />
    );
    expect(renderizedPage.queryAllByText(/See Details/).length).toBe(2);
  });
});
