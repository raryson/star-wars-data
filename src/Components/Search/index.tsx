import styled from 'styled-components';
import { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import Radio from '../Radio';
import Card from '../Card';
import { getPeopleByName } from '../../Services/People';
import { getFilmsByName } from '../../Services/Films';

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [searchingFor, setSearchingFor] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchButtonIsDisabled = search === '';

  const handleSubmit = async (event: any) => {
    let apiResponse;
    event.preventDefault();
    setIsLoading(true);
    switch (searchingFor) {
      case 'Movies':
        apiResponse = await getFilmsByName(search);
        break;
      case 'People':
        apiResponse = await getPeopleByName(search);
        break;
    }
    setIsLoading(false);
  };

  const PeoplePlaceHolder = 'e.g Chewbacca, Yoda, Boba Fett';
  const FilmsPlaceHolder = 'e.g A New Hope, The Empire Strike Back';

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10">
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
                {isLoading ? 'Searching' : 'Search'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

const SearchingForText = styled.h2`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 21px;
`;
