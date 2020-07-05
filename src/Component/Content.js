import React from "react";
import styled from "styled-components";
import Video from "./Video";
import Vote from "./Vote";
import VoteResult from "./VoteResult";
import Comment from "./Comment";

const Content = styled.div`
  width: 100vw;
  min-height: 200px;
  height: 400vh;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.headerHeight};
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
`;

export default () => {
  return (
    <Content>
      <ContentWrapper id="contentWrapper_0">
        <Video />
      </ContentWrapper>
      <ContentWrapper id="contentWrapper_1">
        <Vote />
      </ContentWrapper>
      <ContentWrapper id="contentWrapper_2">
        <VoteResult />
      </ContentWrapper>
      <ContentWrapper id="contentWrapper_3">
        <Comment />
      </ContentWrapper>
    </Content>
  );
};
