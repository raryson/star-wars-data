import { CardStyled } from './styled';

export default function Card(props: ICardProps) {
  return (
    <div>
      <CardStyled>{props.children}</CardStyled>
    </div>
  );
}

interface ICardProps {
  children: any;
}
