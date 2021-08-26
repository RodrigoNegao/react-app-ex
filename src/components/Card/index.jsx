import PropTypes from 'prop-types';
import { Container, Title } from './style';

export default function Card(title, height, subtitle, width, icon, bgcolor) {
  //props
  //const { title, height, subtitle, width, icon, bgcolor } = props;
  return (
    <Container height={height} width={width} bgcolor={bgcolor}>
      <div>{icon}</div>
      <Title>{title}</Title>
      <p>{subtitle}</p>
    </Container>
  );
}

// Card.propTypes = {
//   title: PropTypes.string,
// }
