import React from "react";
import styled from "styled-components";
const Button = styled.button`
  background-color: #00474b;
  width: 146px;
  height: 48px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  border: 0;
  font-size: 24px;
  font-weight: 700;
  transition: background-color 0.35s;
  &:hover {
    background-color: #9fe8df;
    color: #00474b;
  }
  &:focus {
    background-color: #26c2ae;
    color: #00474b;
  }
  @media screen and (min-width: 1440px) {
    width: 117px;
  }
`;
export default function Buttons({ list, buttonClicked }) {
  return (
    <>
      {list.map((item, index) => {
        return (
          <Button onClick={() => buttonClicked(item)} key={index}>
            {item}%
          </Button>
        );
      })}
    </>
  );
}
