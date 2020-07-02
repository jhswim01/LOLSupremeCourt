import React from "react";
import styled from "styled-components";
import Video from "./Video";
import Vote from "./Vote";
import VoteResult from "./VoteResult";
import Comment from "./Comment";

const Content = styled.div`
  width: 100%;
  min-height: 200px;
  height: 300vh;
  background-color: yellow;
`;

export default () => {
  return (
    <Content>
      <Video />
      <Vote />
      <VoteResult />
      <Comment />
    </Content>
  );
};
