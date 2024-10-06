import styled, { css } from 'styled-components';

const ButtonStyled = styled.button<{ $disabled?: boolean }>`
  background: #0ab463;
  border: solid 1px #0ab463;
  color: white;
  border-radius: 20px;
  margin: 20px 0 0;
  padding: 8px 144px 8px 145px;
  text-transform: uppercase;

  ${(props) =>
    props.$disabled &&
    css`
      border: solid 1px #c4c4c4;
      background: #c4c4c4;
      cursor: not-allowed;
    `}
`;

export { ButtonStyled };
