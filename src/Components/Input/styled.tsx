import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 #ffffff;
  border: solid 1px #dadada;
  background-color: #fff;
  color: #383838;
  &:focus {
    border: solid 1px #383838;
    outline: none !important;
  }
`;

export { InputStyled };
