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
    <Header id="header">
      <ScrollButton text="video" to="videoWrapper" />
      <ScrollButton text="vote" to="voteWrapper" />
      <ScrollButton text="result" to="voteResultWrapper" />
      <ScrollButton text="comment" to="commentWrapper" />
    </Header>
  );
};
