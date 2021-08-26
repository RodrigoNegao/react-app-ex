import { Container } from './style';

propTypes: {
  title: PropTypes.string;
}

export default function ImageCoverRow(props) {
  const { title, height, width, image } = props;
  return (
    <Container height={height} image={image} width={width}>
      <h1>{title}</h1>
    </Container>
  );
}
