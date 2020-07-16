import React from "react";
import styled, { keyframes } from "styled-components";
import { CheckboxIcon } from "./Icons";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const clickAnimation = keyframes`
  0% {
    border-radius: 5px;    
  }
  50% {
    
  }
  100% {
    background-color: #5680e9;
    border-radius: 20px;    
  }
`;

const VoteSelectButton = styled.button`
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  height: 40px;
  margin-bottom: 10px;
  background-color: white;
  border: none;
  &:before {
    border-bottom: 2px solid #5ab9ea;
    content: "";
    position: absolute;
    left: 2.5%;
    bottom: 0;
    width: 95%;
  }
  outline: 0;
  & > span {
    margin-left: 42px;
  }
  & > svg {
    fill: #5ab9ea;
    position: absolute;
    left: 15px;
    margin-right: auto;
  }
  &:focus,
  &:hover {
    color: white;
    > svg {
      fill: white;
    }
    background-color: #5680e9;
    border-radius: 20px;
    animation: ${clickAnimation} 0.9s ease-out 1 forwards;
    :before {
      border: none;
    }
  }
`;

export default ({ text }) => {
  return (
    <Wrapper>
      <VoteSelectButton>
        <CheckboxIcon />
        <span>{text}</span>
      </VoteSelectButton>
    </Wrapper>
  );
};
