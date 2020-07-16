import React from "react";
import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";

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
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default () => {
  return (
    <Header>
      <HamburgerButton />
    </Header>
  );
};
