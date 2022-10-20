import React from "react";
import styled from "styled-components";

const ResButton = styled.button`
  width: 281px;
  height: 48px;
  border-radius: 5px;
  background-color: #26c2ae;
  color: #00474b;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  border: 0;
  margin-left: 23px;
  margin-top: 5px;
  margin-bottom: 20px;
  transition: background-color 0.35s;
  cursor: pointer;
  &:hover {
    background-color: #9fe8df;
  }
  @media screen and (min-width: 1440px) {
    width: 333px;
    height: 48px;
    margin: 40px;
    margin-top: 130px;
  }
`;
export default function ResetButton({ reset }) {
  return (
    <ResButton onClick={() => reset()} type="submit">
      RESET
    </ResButton>
  );
}
