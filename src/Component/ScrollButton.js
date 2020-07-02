import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 70%;
  width: 70px;
  background-color: rgba(253, 167, 223, 1);
`;

export default ({ text, to }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return <Button onClick={onClick}>{text}</Button>;
};
