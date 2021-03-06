import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  background-color: white;
  height: ${(props) => props.height || '300px'};
  width: ${(props) => props.width || '98.77vw'};
`;

export default Container;
