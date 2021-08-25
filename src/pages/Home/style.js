import styled from "styled-components";

export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "98vw"};
`;
