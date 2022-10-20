import React from "react";
import styled from "styled-components";

const Custom = styled.input`
  width: 147px;
  height: 48px;
  background-color: #f3f9fa;
  border-radius: 5px;
  border: none;
  font-size: 24px;
  text-align: right;
  color: #547878;
  padding-right: 6px;
  &:focus {
    outline: none;
    border: solid 3px #26c2ae;
    padding-right: 3px;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (min-width: 1440px) {
    width: 117px;
  }
`;
export default function CustomInput({ customChange, customNumber }) {
  return (
    <Custom
      placeholder="Custom"
      type="number"
      value={customNumber}
      onChange={customChange}
    />
  );
}
