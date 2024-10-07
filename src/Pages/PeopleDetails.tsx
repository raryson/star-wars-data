/* eslint-disable */

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Card from '../Components/Card';
import { StyledLine } from '../Components/DividerLine/styled';
import { getPeopleByName } from '../Services/People';
import { IInfoRequest } from '../Components/InfoSelect';
import { getFilmsByUrl } from '../Services/Films';
import Button from '../Components/Button';
import { StyledH1, StyledParaph, StyledSpan, StyledTitle, ButtonContainer } from './styled';

export default function PeopleDetails() {
  const [infoRequest, setInfoRequest] = useState({
    results: [],
    count: 0,
    next: 0,
    previous: 0
  } as IInfoRequest);
  const [filmResponses, setFilmsresponses] = useState([] as any);
  const [isLoadingFilms, setIsLoadingFilms] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    getPeopleByName(name as string).then((value) => {
      setInfoRequest(value);
      const requests = value.results[0].films.map((film) => getFilmsByUrl(film));
      Promise.all(requests).then((value) => {
        setFilmsresponses(value);
        setIsLoadingFilms(false);
      });
    });
  }, []);

  const generateDetailsPeopleInfo = () => (
    <div className="mt-2">
      <StyledParaph>Birth Year: {infoRequest.results[0].birth_year}</StyledParaph>
      <StyledParaph>Gender: {infoRequest.results[0].gender}</StyledParaph>
      <StyledParaph>Eye Color: {infoRequest.results[0].eye_color}</StyledParaph>
      <StyledParaph>Hair Color: {infoRequest.results[0].hair_color}</StyledParaph>
      <StyledParaph>Height: {infoRequest.results[0].height}</StyledParaph>
      <StyledParaph>Mass: {infoRequest.results[0].mass}</StyledParaph>
    </div>
  );

  const generateMoviesList = () => {
    return (
      <div className="mt-2">
        {filmResponses.map((value: { title: string }, index: number) => {
          return (
            <Link
              className="text-blue-600 dark:text-blue-500 hover:underline"
              to={`/details/films/${value.title}`}
            >
              <StyledSpan>
                {value.title}
                {index !== filmResponses.length - 1 ? ', ' : ''}
              </StyledSpan>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div>
        <div>
          <Card>
            <StyledH1>{name}</StyledH1>
            <div className="grid grid-cols-2 gap-16">
              <div className="col-start-1">
                <StyledTitle>Details</StyledTitle>
                <StyledLine />
                {infoRequest.results.length > 0 ? (
                  generateDetailsPeopleInfo()
                ) : (
                  <Skeleton height={18} count={6} />
                )}
                <ButtonContainer>
                  <Link to={'/'}>
                    <Button>Back to Search</Button>
                  </Link>
                </ButtonContainer>
              </div>

              <div className="col-start-2">
                <StyledTitle>Movies</StyledTitle>
                <StyledLine />
                {isLoadingFilms ? <Skeleton height={18} count={6} /> : generateMoviesList()}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
