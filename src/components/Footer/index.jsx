import React from 'react';
import Container from './style';

export default function Footer(props) {
  const { height, width, children } = props;
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  );
}

// Footer.propTypes = {
//   width: PropTypes.string,
//   height: PropTypes.string,
//   children: PropTypes.string,
// };

// Footer.defaultProps = {
//   children: ' ',
// };
