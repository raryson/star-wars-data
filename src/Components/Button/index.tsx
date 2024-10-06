import { ButtonStyled } from './styled';

export default function Button(props: IButtonProps) {
  return (
    <div>
      <ButtonStyled>{props.children}</ButtonStyled>
      <ButtonStyled $disabled>{props.children}</ButtonStyled>
    </div>
  );
}

interface IButtonProps {
  children: string;
  isLoading?: boolean;
  disabled?: boolean;
}
