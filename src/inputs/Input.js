import React from "react";
import styled from "styled-components";
import Dollar from "../svg/Dollar";
const BillInput = styled.input`
  width: 311px;
  height: 48px;
  border-radius: 5px;
  background-color: #f3f9fa;
  font-size: 24px;
  font-weight: 700;
  color: #00474b;
  border: none;
  border: ${(props) =>
    props.billError.message ? "solid 3px #E17457" : "none"};
  text-align: right;
  padding-right: 6px;

  &:focus {
    border: solid 3px #26c2ae;
    border: ${(props) =>
      props.billError.message ? "solid 3px #E17457" : "solid 3px #26c2ae"};
    outline: none;
    padding-right: 3px;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media screen and (min-width: 1440px) {
    width: 379px;
    height: 48px;
  }
`;
const ErrorP = styled.p`
  color: #e17457;
  position: absolute;
  text-align: right;
  right: 0px;
  top: -34px;
`;
const HolderDiv = styled.div`
  margin-top: 10px;
  position: relative;
`;
export default function Input({ billChange, bill, billError }) {
  return (
    <>
      <HolderDiv>
        <ErrorP>{billError.message ? billError.message : ""}</ErrorP>
        <Dollar fill={"grey"} />
        <BillInput
          billError={billError}
          placeholder="0"
          type="number"
          onChange={billChange}
          value={bill}
        />
      </HolderDiv>
    </>
  );
}
