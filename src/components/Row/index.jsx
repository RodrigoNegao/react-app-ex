import React from 'react';
import Container from './style';

export default function Row(props) {
  const { height, width, children } = props;
  return (
    <Container height={height} width={width}>
      {children}
    </Container>
  );
}

// Row.propTypes = {
//   children: PropTypes.string,
// };

// Row.defaultProps = {
//   children: ' ',
// };
