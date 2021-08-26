import Container from './style';

export default function Row(height, children) {
  // const { height, children } = props;
  return <Container height={height}>{children}</Container>;
}
