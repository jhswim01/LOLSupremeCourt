import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { XIcon } from "./Icons";

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: flex-end;
  display: ${(props) => (props.visible ? "flex" : "none")};
`;

const menuShowAnimation = keyframes`
  0% {
    left: 100vw;
  }
  100% {
    left: 0;
  }
`;

const MenuBackground = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  animation: ${menuShowAnimation} 0.3s ease-out 1 forwards;
  background-color: white;
  opacity: 1;
`;

const ExitRow = styled.div`
  width: 100%;
  height: 6.5%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0px 24px;
  & > svg {
    fill: grey;
  }
`;

const LoginRow = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  height: 40px;
  color: white;
  background: linear-gradient(to right, #5ab9ea, #84ceeb);
  width: 90%;
  border: none;
  border-radius: 6px;
  font-size: 15px;
`;

const HomeRow = styled.div`
  height: 12%;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

const CommunityRow = styled.div`
  height: 30%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const RowTitle = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  padding-left: 15px;
`;

const RowMenu = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.8);
  font-size: 15px;
  padding-left: 25px;
`;

export default React.forwardRef(({ visible, onXButtonClick }, ref) => {
  console.log("called menu, visible", visible);

  return (
    <Wrapper visible={visible}>
      <MenuBackground visible={visible} ref={ref}>
        <ExitRow>
          <XIcon size={18} onClick={onXButtonClick} />
        </ExitRow>
        <LoginRow>
          <LoginButton>로그인</LoginButton>
        </LoginRow>
        <HomeRow>
          <RowTitle>홈</RowTitle>
          <RowMenu>전체</RowMenu>
        </HomeRow>
        <CommunityRow>
          <RowTitle>커뮤니티</RowTitle>
          <RowMenu>자유</RowMenu>
          <RowMenu>LOL</RowMenu>
          <RowMenu>IDOL</RowMenu>
          <RowMenu>블랙박스</RowMenu>
        </CommunityRow>
      </MenuBackground>
    </Wrapper>
  );
});
