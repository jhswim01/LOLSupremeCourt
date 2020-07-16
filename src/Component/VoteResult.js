import React from "react";
import styled from "styled-components";
import VoteResultChart from "./VoteResultChart";
import VotePercentageBox from "./VotePercentageBox";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PercetageBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
`;

export default ({ result }) => {
  let totalVoteCount;
  if (result) {
    totalVoteCount = result.map((el) => el.result).reduce((a, b) => a + b);
  }

  return (
    <Wrapper>
      투표결과입니다!
      <VoteResultChart result={result} />
      <PercetageBoxWrapper>
        {result &&
          result.map((el, index) => (
            <VotePercentageBox
              key={index}
              index={index}
              text={el.text}
              percentage={(100 * (el.result / totalVoteCount)).toFixed(0)}
            ></VotePercentageBox>
          ))}
      </PercetageBoxWrapper>
    </Wrapper>
  );
};
