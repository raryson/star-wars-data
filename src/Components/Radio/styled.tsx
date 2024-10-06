import styled from 'styled-components';
import { BrandColor } from '../../styled-components/GlobalStyles';

const RadioStyled = styled.input`
  vertical-align: middle;
  appearence: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  border: 1px solid ${BrandColor.PINKISH_GREY};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
  &:checked::after {
    background-color: ${BrandColor.WHITE};
    border: 4px solid ${BrandColor.AZURE};
  }
  &:hover::after {
    background-color: ${BrandColor.WHITE};
    border: 4px solid ${BrandColor.AZURE};
  }
  &:focus {
    outline: 1px solid ${BrandColor.AZURE};
  }
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RadioLabel = styled.label`
  cursor: auto;
  vertical-align: middle;
  margin-right: 30px;
`;

const RadioGroup = styled.div`
  cursor: pointer;
`;

export { RadioStyled, RadioContainer, RadioGroup, RadioLabel };
