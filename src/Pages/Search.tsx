import { useState } from 'react';
import Search from '../Components/Search';
import InfoSelect, { IInfoRequest } from '../Components/InfoSelect';

export default function SearchPage() {
  const [starWarsRequest, setStarWarsRequest] = useState({} as IInfoRequest);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-10">
        <Search setRequestData={setStarWarsRequest} setIsLoading={setIsLoading} />
        <InfoSelect infoRequestToShow={starWarsRequest} isLoading={isLoading} />
      </div>
    </div>
  );
}
