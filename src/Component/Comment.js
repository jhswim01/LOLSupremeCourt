import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
`;

export default () => {
  return <Wrapper>comment</Wrapper>;
};
