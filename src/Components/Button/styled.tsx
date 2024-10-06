import styled, { css } from 'styled-components';
import { BrandColor } from '../../styled-components/GlobalStyles';

const ButtonStyled = styled.button<{ $disabled?: boolean }>`
  background: ${BrandColor.GREEN_TEAL};
  border: solid 1px ${BrandColor.GREEN_TEAL};
  color: white;
  border-radius: 20px;
  width: 100%;
  margin: 10px 0 0;
  padding: 8px;
  text-transform: uppercase;

  ${(props) =>
    props.$disabled &&
    css`
      border: solid 1px ${BrandColor.PINKISH_GREY};
      background: ${BrandColor.PINKISH_GREY};
      cursor: not-allowed;
    `}
`;

export { ButtonStyled };
