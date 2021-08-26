import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: gray;
  height: ${(props) => props.height || '200px'};
  width: ${(props) => props.width || '98.77vw'};
  align-items: center; /* center items vertically, in this case */
  color: black;
  font-size: 16px;
  &:after {
    content: '';
    padding: 20px;
  }
`;

export default Container;
