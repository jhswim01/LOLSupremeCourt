import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ScrollButton from "./ScrollButton";
import VoteSelectButton from "./VoteSelectionButton";
import VoteQuestionTitle from "./VoteQuestionTitle";
import { VoteConfirmIcon } from "./Icons";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const VoteTitle = styled.div`
  position: relative;
  width: 90%;
  height: 50px;
  margin: 0px auto 30px auto;
  padding: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  &:before {
    border-bottom: 2px solid #5ab9ea;
    content: "";
    position: absolute;
    left: 10%;
    bottom: 0;
    width: 80%;
  }
`;

const VoteConfirmButton = styled(ScrollButton)`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 25px;
  width: 110px;
  height: 40px;
  background-color: #5680e9;
  border: none;
  border-radius: 8px;
  &:active {
    outline: none;
    filter: brightness(0.7);
  }
  &:focus {
    outline: none;
  }
  & > svg {
    fill: white;
    margin-left: 6px;
    margin-bottom: 3px;
  }
`;

export default ({ vote }) => {
  const themeContext = useContext(ThemeContext);
  const headerHeight = parseInt(themeContext.headerHeight);
  console.log(vote);

  return (
    <Wrapper>
      <VoteQuestionTitle text={vote.title && vote.title}></VoteQuestionTitle>
      <VoteTitle>What Do You Think?</VoteTitle>
      {vote.selection &&
        vote.selection.map((el, index) => (
          <VoteSelectButton key={index} text={el.text} />
        ))}

      {vote && (
        <VoteConfirmButton
          text="투표 하기"
          scrollTo="contentWrapper_2"
          offset={-headerHeight}
          icon={<VoteConfirmIcon size={17} />}
        ></VoteConfirmButton>
      )}
    </Wrapper>
  );
};
