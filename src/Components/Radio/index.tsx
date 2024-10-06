import { RadioStyled, RadioContainer, RadioGroup, RadioLabel } from './styled';

export default function Radio(props: IRadioProps) {
  return (
    <RadioContainer>
      {props.elements.map((element, index) => (
        <RadioGroup>
          <RadioStyled type="radio" id={String(index)} value={element} name={props.name} />
          <RadioLabel htmlFor={element}>{element}</RadioLabel>
        </RadioGroup>
      ))}
    </RadioContainer>
  );
}

interface IRadioProps {
  elements: string[];
  name: string;
}
