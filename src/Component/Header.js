import React from "react";
import styled from "styled-components";
import ScrollButton from "./ScrollButton";

const Header = styled.header`
  width: 100%;
  height: 70px;
  background-color: rgba(189, 195, 199, 1);
  opacity: 0.7;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default () => {
  return (
    <Header>
      <ScrollButton text="video" />
      <ScrollButton text="vote" />
      <ScrollButton text="result" />
      <ScrollButton text="comment" />
    </Header>
  );
};
