import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 70%;
  width: 70px;
  background-color: rgba(253, 167, 223, 1);
`;

export default ({ text, scrollTo, offset }) => {
  if (typeof offset !== "number") {
    offset = 0;
  }

  const onClick = (e) => {
    e.preventDefault();
    const offsetTop = document.querySelector(`#${scrollTo}`).offsetTop;

    window.scroll({
      top: offsetTop + offset,
      behavior: "smooth"
    });
  };

  return <Button onClick={onClick}>{text}</Button>;
};
