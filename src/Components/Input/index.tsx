import { InputStyled } from './styled';

export default function Input(props: IInputProps) {
  return (
    <div>
      <InputStyled placeholder={props.placeholder} />
    </div>
  );
}

interface IInputProps {
  placeholder?: string;
}
