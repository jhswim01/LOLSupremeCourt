import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const VideoTitle = styled.div`
  position: relative;
  width: 90%;
  height: 50px;
  margin: 35px 15px 35px 15px;
  padding: 0px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  &:before {
    border-bottom: 2px solid #5ab9ea;
    content: "";
    position: absolute;
    left: 2.5%;
    bottom: 0;
    width: 95%;
  }
`;

const VideoWidthWrapper = styled.div`
  width: 100vw;
`;

const PlayerWrapper = styled.div`
  background-color: #ff6b81;
  position: relative;
  padding-top: 56.25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Video = styled(ReactPlayer)`
  background-color: #c1c8e4;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export default ({ index, playing, url, title }) => {
  console.log("video.js called. index:", index);

  return (
    <Wrapper>
      <VideoTitle>
        {title && title}
        {!title && "Video Title"}
      </VideoTitle>
      <VideoWidthWrapper>
        <PlayerWrapper className="playerWrapper">
          <Video
            url={url}
            controls
            playing={playing}
            width="100%"
            height="100%"
            volume={0.5}
            muted={true}
          />
        </PlayerWrapper>
      </VideoWidthWrapper>
    </Wrapper>
  );
};
