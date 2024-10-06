import { InputStyled } from './styled';

export default function Input(props: IInputProps) {
  return (
    <div>
      <InputStyled
        onChange={(event) => props.handleOnChanges(event.target.value)}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}

interface IInputProps {
  placeholder?: string;
  handleOnChanges: Function;
}
