import styled from 'styled-components';

import Card from '../Card';
import { BrandColor } from '../../styled-components/GlobalStyles';
import { StyledLine } from '../DividerLine/styled';
import Button from '../Button';

export default function InfoSelect(props: IInfoSelectProps) {
  const handleRender = () => {
    if (props.isLoading) return <StyledContentNoItens>Searching...</StyledContentNoItens>;
    if (props.infoRequestToShow.count <= 0) return generateNotFindMessage();
    if (props.infoRequestToShow.count > 0 && !props.isLoading)
      return generateInfoList(props.infoRequestToShow);
  };
  return (
    <div className="col-span-6 grid-cols-3 mr-8 w-full">
      <Card>
        <StyledTittle>Results</StyledTittle>
        <StyledLine />
        <StyledDefaultResultsText>{handleRender()}</StyledDefaultResultsText>
      </Card>
    </div>
  );
}

const generateNotFindMessage = () => (
  <StyledContentNoItens>
    There are zero matches.
    <br />
    Use the form to search for People or Movies.
  </StyledContentNoItens>
);

const generateInfoList = (infoList: IInfoRequest) => {
  return (
    <StyledItemList>
      {infoList.results.map((infoData) => (
        <div>
          <div className="flex justify-between">
            <StyledName>{infoList.type === 'Movies' ? infoData.title : infoData.name}</StyledName>
            <StyledButtomDiv>
              <Button>See Details</Button>
            </StyledButtomDiv>
          </div>
          <StyledLine />
        </div>
      ))}
    </StyledItemList>
  );
};

const StyledTittle = styled.h2`
  color: ${BrandColor.BLACK};
  margin-bottom: 10px;
  font-size: 18px;
`;

const StyledName = styled.h3`
  display: inline;
  font-size: 16px;
  margin-top: 17px;
  margin-bottom: 17px;
  color: ${BrandColor.BLACK};
`;

const StyledDefaultResultsText = styled.p`
  font-size: 14px;
  color: ${BrandColor.PINKISH_GREY};
`;

const StyledItemList = styled.div`
  height: 600px;
`;

const StyledButtomDiv = styled.div`
  display: inline-flex;
`;

const StyledContentNoItens = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

interface IInfoSelectProps {
  infoRequestToShow: IInfoRequest;
  isLoading: boolean;
}

export interface IInfoRequest {
  count: number;
  next: number;
  previous: number;
  results: IInfoResult[];
  type: string;
}

interface IInfoResult {
  name: string;
  title?: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}
