import React, { useEffect, useRef } from "react";
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
  align-items: center;k
`;

export default () => {
  let headerHeight;
  const headerRef = useRef(null);

  useEffect(() => {
    headerHeight = headerRef.current.offsetHeight;
    console.log(headerHeight);
  }, []);

  return (
    <Header id="header" ref={headerRef}>
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
