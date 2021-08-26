import styled from 'styled-components';
import ocean from '../../assets/img/ocean.jpg';

const Container = styled.div`
  position: relative;
  background-color: #343a40;
  background: url(${(props) => props.image || ocean}) no-repeat center center;
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '98.77vw'};
  background-size: cover;
  text-align: center;
  vertical-align: middle;
  line-height: ${(props) =>
    props.height || '200px'}; /* The same as your div height */
  color: white;
  font-size: 3rem;
`;

export default Container;
