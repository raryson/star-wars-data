import styled from 'styled-components';
import { BrandColor } from '../../styled-components/GlobalStyles';

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

const StyledDefaultResultsText = styled.span`
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

export {
  StyledTittle,
  StyledName,
  StyledDefaultResultsText,
  StyledItemList,
  StyledButtomDiv,
  StyledContentNoItens
};
