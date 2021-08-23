import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width || "80px"};
  text-align: center;
  color: black;
  font-size: 16px;
  padding: 10px;
`;

export const Title = styled.div`
  text-align: center;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;
