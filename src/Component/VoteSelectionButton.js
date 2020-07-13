import React from "react";
import styled, { keyframes } from "styled-components";
import { CheckboxIcon } from "./Icons";

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  border-bottom: 2px solid #5ab9ea;
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
    background-color: #5680e9;
    color: white;
    outline: 0;
    transition: all 0.8s;
    border: none;
    border-radius: 20px;
  }
  &:focus > svg,
  &:hover > svg {
    fill: white;
  }
`;

const clickAnimation = keyframes`
  0% {

  }
  50% {

  }
  100% {
    
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
