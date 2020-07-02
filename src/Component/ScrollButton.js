import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 70%;
  width: 70px;
  background-color: rgba(253, 167, 223, 1);
`;

export default ({ text, to }) => {
  const btn = document.getElementById("header");
  console.log(btn);
  const onClick = (e) => {
    e.preventDefault();
    const offsetTop = document.querySelector(`#${to}`).offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  };

  return <Button onClick={onClick}>{text}</Button>;
};
