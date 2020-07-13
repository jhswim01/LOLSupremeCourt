import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ScrollButton from "./ScrollButton";

const Header = styled.header`
  width: 100vw;
  height: ${(props) => props.theme.headerHeight};
  background-color: ${(props) => props.theme.headerColor};
  background: linear-gradient(to right, #84ceeb, #5680e9);
  position: fixed;
  top: 0px;
  left: auto;
  right: 0px;
  opacity: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default () => {
  const themeContext = useContext(ThemeContext);
  const headerHeight = parseInt(themeContext.headerHeight);

  return (
    <Header>
      {/* <ScrollButton
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
      /> */}
    </Header>
  );
};
