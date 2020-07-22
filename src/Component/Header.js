import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import HamburgerButton from "./HamburgerButton";
import { JudgeIcon } from "./Icons";
import HamburgerMenu from "./HamburgerMenu";

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
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
`;

const JudgeIconWrapper = styled.div`
  position: absolute;
  left: 0;
  & > svg {
    fill: white;
  }
  margin-left: 20px;
`;

const HeaderTitle = styled.div`
  position: absolute;
  left: 0;
  margin-left: 70px;
  color: white;
  font-weight: 500;
  font-size: 17px;
`;

export default () => {
  const hamburgerMenuRef = useRef(null);
  const [menuVisiblitly, setMenuVisiblity] = useState(false);
  const onHamburgerButtonClick = (e) => {
    setMenuVisiblity(true);
  };

  const onXButtonClick = (e) => {
    setMenuVisiblity(false);
  };

  return (
    <Header>
      <JudgeIconWrapper>
        <JudgeIcon size={32} />
      </JudgeIconWrapper>
      <HeaderTitle>오늘은 내가 대법관</HeaderTitle>
      <HamburgerButton onHamburgerButtonClick={onHamburgerButtonClick} />
      <HamburgerMenu
        visible={menuVisiblitly}
        onXButtonClick={onXButtonClick}
        ref={hamburgerMenuRef}
      />
    </Header>
  );
};
