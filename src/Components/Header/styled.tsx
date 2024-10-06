import styled from 'styled-components';
import { BrandColor } from '../../styled-components/GlobalStyles';

const StyledHeader = styled.div`
  height: 50px;
  size: 18px;
  padding-top: 14px;
  margin-bottom: 30px;
  box-shadow: 0 2px 0 0 ${BrandColor.GAINSBORO};
  background-color: ${BrandColor.WHITE};
  color: ${BrandColor.GREEN_TEAL};
`;

export { StyledHeader };
