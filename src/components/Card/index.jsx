import { Container, Title } from "./style";

export default function Card(props) {
  const { title, height, subtitle, width } = props;
  return (
    <Container height={height} width={width}>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </Container>
  );
}
