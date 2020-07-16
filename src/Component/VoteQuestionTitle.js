import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VoteSelectButton = styled.button`
  font-size: 17px;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 40px;
  margin-bottom: 5px;
  background-color: white;
  border: none;
  outline: 0;
`;

export default ({ text }) => {
  return (
    <Wrapper>
      <VoteSelectButton>
        <span>{text}</span>
      </VoteSelectButton>
    </Wrapper>
  );
};
