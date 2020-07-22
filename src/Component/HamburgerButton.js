import React from "react";
import styled, { keyframes } from "styled-components";
import { HamburgerIcon } from "./Icons";

const clickAnimation = keyframes`
  0% {
    background-color: transparent;
  }
  50% {
    background-color: #c1c8e4;
    opacity: 0.5;    
  }
  100% {
    background-color: transparent;
  }
`;

const WrapperButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 14px;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 1;
  .hidden {
    opacity: 0;
  }
  > svg {
    position: absolute;
    fill: white;
  }
  &:active {
    animation: ${clickAnimation} 0.4s ease-out 1 forwards;
  }
`;

export default ({ onHamburgerButtonClick }) => {
  return (
    <WrapperButton onClick={onHamburgerButtonClick}>
      <HamburgerIcon size={20}></HamburgerIcon>
    </WrapperButton>
  );
};
