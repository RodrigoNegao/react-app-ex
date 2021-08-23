import styled from "styled-components";
import ocean from "../../assets/img/ocean.jpg";

export const Container = styled.div`
  position: relative;
  background-color: #343a40;
  background: url(${(props) => props.image || ocean}) no-repeat center center;
  height: ${(props) => props.height || "300px"};
  width: ${(props) => props.width || "100vw"};
  background-size: cover;
  text-align: center;
  vertical-align: middle;
  line-height: ${(props) =>
    props.height || "200px"}; /* The same as your div height */
  color: white;
  font-size: 3rem;
`;
