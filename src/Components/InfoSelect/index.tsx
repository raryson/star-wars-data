import Card from '../Card';
import { StyledLine } from '../DividerLine/styled';
import Button from '../Button';
import {
  StyledButtomDiv,
  StyledContentNoItens,
  StyledDefaultResultsText,
  StyledItemList,
  StyledName,
  StyledTittle
} from './styled';

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
