import { ButtonStyled } from './styled';

export default function Button(props: IButtonProps) {
  return (
    <div>
      <ButtonStyled $disabled={props.disabled}>{props.children}</ButtonStyled>
    </div>
  );
}

interface IButtonProps {
  children: string;
  isLoading?: boolean;
  disabled?: boolean;
}
