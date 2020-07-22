import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CommentWrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const CommentUser = styled.div`
  font-weight: 600;
  margin: 0px 15px;
`;

const CommentText = styled.div``;

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <CommentUser>{comment.user}</CommentUser>
      <CommentText>{comment.text}</CommentText>
    </CommentWrapper>
  );
};

export default ({ comment }) => {
  return (
    <Wrapper>
      {comment && comment.map((el) => <Comment comment={el} />)}
    </Wrapper>
  );
};
