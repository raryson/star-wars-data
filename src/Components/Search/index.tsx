import styled from 'styled-components';
import { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import Radio from '../Radio';
import Card from '../Card';
import { getPeopleByName } from '../../Services/People';
import { getFilmsByName } from '../../Services/Films';

export default function Search(props: ISearchProps) {
  const [search, setSearch] = useState('');
  const [searchingFor, setSearchingFor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchButtonIsDisabled = search === '';

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    props.setIsLoading(true);
    switch (searchingFor) {
      case 'Movies':
        const filmsResponse = await getFilmsByName(search);
        const parsedDataFilm = { type: searchingFor, ...JSON.parse(filmsResponse) };
        props.setRequestData(parsedDataFilm);
        setIsLoading(false);
        props.setIsLoading(false);
        break;
      case 'People':
        const peopleResponse = await getPeopleByName(search);
        const parsedDataPeople = { type: searchingFor, ...JSON.parse(peopleResponse) };
        props.setRequestData(parsedDataPeople);
        setIsLoading(false);
        props.setIsLoading(false);
        break;
    }
  };

  const PeoplePlaceHolder = 'e.g Chewbacca, Yoda, Boba Fett';
  const FilmsPlaceHolder = 'e.g A New Hope, The Empire Strike Back';

  return (
    <div className="col-span-4 mr-8 w-full">
      <Card>
        <form onSubmit={handleSubmit}>
          <SearchingForText>What are you searching for?</SearchingForText>
          <Radio
            elements={['People', 'Movies']}
            name="typeSelect"
            handleOnChanges={setSearchingFor}
          />
          <Input
            placeholder={searchingFor === 'Movies' ? FilmsPlaceHolder : PeoplePlaceHolder}
            handleOnChanges={setSearch}
          />
          <Button isLoading={isLoading} disabled={searchButtonIsDisabled}>
            {isLoading ? 'Searching...' : 'Search'}
          </Button>
        </form>
      </Card>
    </div>
  );
}

const SearchingForText = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 21px;
`;

interface ISearchProps {
  setRequestData: Function;
  setIsLoading: Function;
}
