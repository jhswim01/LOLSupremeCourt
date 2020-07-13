import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import ScrollButton from "./ScrollButton";
import VoteSelectButton from "./VoteSelectionButton";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const VoteConfirmButton = styled(ScrollButton)`
  font-size: 14px;
  color: white;
  margin-top: 25px;
  width: 100px;
  height: 40px;
  background-color: #5680e9;
  border: none;
  border-radius: 20px;
  &:active {
    outline: none;
    filter: brightness(0.7);
  }
  &:focus {
    outline: none;
  }
`;

export default ({ vote }) => {
  const themeContext = useContext(ThemeContext);
  const headerHeight = parseInt(themeContext.headerHeight);

  return (
    <Wrapper>
      {vote &&
        vote.map((el, index) => (
          <VoteSelectButton key={index} text={el.text} />
        ))}

      {vote && (
        <VoteConfirmButton
          text="투표 하기 !"
          scrollTo="contentWrapper_2"
          offset={-headerHeight}
        />
      )}
    </Wrapper>
  );
};
