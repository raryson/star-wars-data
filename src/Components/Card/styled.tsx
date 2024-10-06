import styled from 'styled-components';
import { BrandColor } from '../../styled-components/GlobalStyles';

const CardStyled = styled.div`
  text-align: left;
  background-color: ${BrandColor.WHITE};
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 ${BrandColor.GAINSBORO};
  padding: 30px;
  margin-right: 30px;
  margin-left: 30px;
`;

export { CardStyled };
