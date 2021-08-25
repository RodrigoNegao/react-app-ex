import { Container, Title } from "./style";

export default function Card(props) {
  const { title, height, subtitle, width, icon } = props;
  return (
    <Container height={height} width={width}>
      <div>{icon}</div>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </Container>
  );
}
