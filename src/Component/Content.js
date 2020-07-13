import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import Video from "./Video";
import Vote from "./Vote";
import VoteResult from "./VoteResult";

const Content = styled.div`
  width: 100vw;
  min-height: 200px;
  height: 260vh;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.theme.headerHeight};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 70vh;
  flex: 1 1 auto;
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 50vh;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ({ index, className, playing, url, vote }) => {
  console.log("playing ", playing);

  return (
    <Content className={className}>
      <VideoWrapper id="contentWrapper_0">
        <Video index={index} playing={playing} url={url} />
      </VideoWrapper>
      <ContentWrapper id="contentWrapper_1">
        <Vote vote={vote} />
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
