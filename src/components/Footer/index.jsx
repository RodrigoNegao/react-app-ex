import Container from './style';

export default function Footer(height, width, children) {
  // const { height, width, children } = props;
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  );
}
