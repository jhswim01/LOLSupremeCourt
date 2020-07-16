import React from "react";
import styled from "styled-components";

const colorBar = ["#5680e9", "#84ceeb", "5ab9ea", "#c1c8e4", "#8860d0"];

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2px auto;
  font-size: 14px;
  width: 80%;
`;

const Percentage = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 28px;
  border-radius: 7px;
  font-size: 16px;
  margin-right: 10px;
`;

export default ({ percentage, index, text }) => {
  return (
    <Wrapper>
      <Percentage color={colorBar[index]}>{`${percentage} %`}</Percentage>
      <div>{text}</div>
    </Wrapper>
  );
};
