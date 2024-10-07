/* eslint-disable */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Card from '../Components/Card';
import { StyledLine } from '../Components/DividerLine/styled';
import { getPeopleByUrl } from '../Services/People';
import { IInfoRequestMovie } from '../Components/InfoSelect';
import { getFilmsByName } from '../Services/Films';
import Button from '../Components/Button';
import { StyledH1, ButtonContainer, StyledParaph, StyledSpan, StyledTitle } from './styled';

export default function FilmsDetails() {
  const [infoRequest, setInfoRequest] = useState({
    results: [],
    count: 0,
    next: 0,
    previous: 0
  } as IInfoRequestMovie);

  const [characterResponse, setCharacterResponse] = useState([] as any);
  const [loadingCharacter, setLoadingCharacter] = useState(true);

  const { name } = useParams();
  useEffect(() => {
    getFilmsByName(name as string).then((value) => {
      setInfoRequest(value);
      if (!value.results[0]) {
        window.location.href = '/';
      } else {
        const requests = value.results[0].characters.map((character: string) =>
          getPeopleByUrl(character)
        );
        Promise.all(requests).then((value) => {
          setLoadingCharacter(false);
          setCharacterResponse(value);
        });
      }
    });
  }, []);

  const generateFilmInfo = () => (
    <div className="mt-2">
      <StyledParaph>{infoRequest.results[0].opening_crawl}</StyledParaph>
    </div>
  );

  const generateCharacterList = () => {
    return (
      <div className="mt-2">
        {characterResponse.map((value: { name: string }, index: number) => {
          return (
            <Link
              key={index}
              className="text-blue-600 dark:text-blue-500 hover:underline"
              to={`/details/people/${value.name}`}
            >
              <StyledSpan>
                {value.name}
                {index !== characterResponse.length - 1 ? ', ' : ''}
              </StyledSpan>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto w-2/3">
      <div>
        <div className="col-span-10">
          <Card>
            <StyledH1>{name}</StyledH1>
            <div className="grid grid-cols-2 gap-16">
              <div className="col-start-1">
                <StyledTitle>Opening Crawl</StyledTitle>
                <StyledLine />
                {infoRequest.results.length > 0 ? (
                  generateFilmInfo()
                ) : (
                  <Skeleton height={30} count={10} />
                )}
                <ButtonContainer>
                  <Link to={'/'}>
                    <Button>Back to Search</Button>
                  </Link>
                </ButtonContainer>
              </div>

              <div className="col-start-2">
                <StyledTitle>Characters</StyledTitle>
                <StyledLine />
                {loadingCharacter ? <Skeleton height={18} count={10} /> : generateCharacterList()}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
