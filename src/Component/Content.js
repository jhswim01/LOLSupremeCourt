import React, { useRef } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import Video from "./Video";
import Vote from "./Vote";
import VoteResult from "./VoteResult";

const Content = styled.div`
  width: 100vw;
  height: 472vw;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.headerHeight};
`;

const ContentWrapper = styled.div`
  margin-top: 8vw;
  width: 100vw;
  height: 26%;
  flex: 1 1 auto;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const VideoWrapper = styled.div`
  margin-top: 8vw;
  width: 100vw;
  height: 110vw;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export default ({ index, className, playing, video, vote, comment }) => {
  // console.log("playing ", playing);
  const ref = useRef(null);
  const onScroll = (e) => {
    // console.log(e.target.offsetHeight);
  };

  return (
    <Content className={className} onScroll={onScroll}>
      <VideoWrapper id="contentWrapper_0" ref={ref}>
        <Video
          index={index}
          playing={playing}
          url={video.url}
          title={video.title}
        />
      </VideoWrapper>
      <ContentWrapper id="contentWrapper_1">
        <Vote vote={vote} />
      </ContentWrapper>
      <ContentWrapper id="contentWrapper_2">
        <VoteResult result={vote.selection} />
      </ContentWrapper>
      <ContentWrapper id="contentWrapper_3">
        <Comment comment={comment} />
      </ContentWrapper>
    </Content>
  );
};
