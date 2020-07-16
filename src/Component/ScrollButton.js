import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 70%;
  width: 70px;
  background-color: ${(props) => props.theme.headerButton};
`;

export default ({ text, scrollTo, offset, className, icon }) => {
  if (typeof offset !== "number") {
    offset = 0;
  }

  const onClick = (e) => {
    e.preventDefault();
    const offsetTop = document.querySelector(`#${scrollTo}`).offsetTop;

    window.scroll({
      top: offsetTop + 2.5 * offset,
      behavior: "smooth"
    });
  };

  return (
    <Button onClick={onClick} className={className}>
      {text}
      {icon}
    </Button>
  );
};
