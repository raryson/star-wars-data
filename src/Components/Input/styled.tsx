import styled from 'styled-components';
import { BrandColor } from '../../styled-components/GlobalStyles';

const InputStyled = styled.input`
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 ${BrandColor.WHITE};
  border: solid 1px ${BrandColor.GAINSBORO};
  background-color: #fff;
  color: ${BrandColor.GRAY22};
  &:focus {
    border: solid 1px ${BrandColor.GRAY22};
    outline: none !important;
  }
`;

export { InputStyled };
