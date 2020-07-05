import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ScrollButton from "./ScrollButton";

const Header = styled.header`
  width: 100vw;
  height: 70px;
  background-color: rgba(189, 195, 199, 1);
  opacity: 0.7;
  position: fixed;
  top: 0px;
  left: auto;
  right: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;

export default () => {
  const themeContext = useContext(ThemeContext);
  const headerHeight = parseInt(themeContext.headerHeight);

  return (
    <Header>
      <ScrollButton
        text="video"
        scrollTo="contentWrapper_0"
        offset={-headerHeight}
      />
      <ScrollButton
        text="vote"
        scrollTo="contentWrapper_1"
        offset={-headerHeight}
      />
      <ScrollButton
        text="result"
        scrollTo="contentWrapper_2"
        offset={-headerHeight}
      />
      <ScrollButton
        text="comment"
        scrollTo="contentWrapper_3"
        offset={-headerHeight}
      />
    </Header>
  );
};
