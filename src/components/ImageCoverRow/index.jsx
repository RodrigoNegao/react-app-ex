import Container from './style';

export default function ImageCoverRow(title, height, width, image) {
  // const { title, height, width, image } = props;
  return (
    <Container height={height} image={image} width={width}>
      <h1>{title}</h1>
    </Container>
  );
}
