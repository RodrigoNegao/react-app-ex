import { Container } from "./style";

export default function ImageCoverRow(props) {
  const { title, height } = props;
  return (
    <Container height={height}>
      <h1>{title}</h1>
    </Container>
  );
}
