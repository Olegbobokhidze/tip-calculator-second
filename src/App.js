import "./app.css";
import React from "react";
import splitter from "./splitter.png";
import Buttons from "./buttons/Buttons";
import Input from "./inputs/Input";
import ResetButton from "./buttons/ResetButton";
import CustomInput from "./inputs/CustomInput";
import { useState } from "react";
import PeopleInput from "./inputs/PeopleInput";
function App() {
  const list = [5, 10, 15, 25, 50];
  const [customNumber, setCustomNumber] = useState();
  const [bill, setBill] = useState();
  const [billError, setBillError] = useState({
    message: "",
    col: "solid 3px #26c2ae",
  });
  const [customError, setCustomError] = useState({
    border: "none",
  });
  const [numberError, setNumberError] = useState({
    message: "",
    col: "solid 3px #26c2ae",
  });
  const [number, setNumber] = useState();
  const [tipamount, setTipamount] = useState(0);
  const [total, setTotal] = useState(0);

  function customChange(e) {
    const custom = e.target.value;
    if (custom >= 0) {
      setCustomNumber(custom);
    }
    if (
      bill > 0 &&
      bill < 10000 &&
      number > 0 &&
      number < 100 &&
      custom > 0 &&
      custom < 100
    ) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "",
      });
      setTipamount((bill * (custom / 100)) / number);
      setTotal(Number(bill) / number + (bill * (custom / 100)) / number);
    } else if (
      bill > 0 &&
      bill < 10000 &&
      custom > 0 &&
      custom < 100 &&
      number == 0
    ) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (
      bill == 0 &&
      number > 0 &&
      number < 100 &&
      custom > 0 &&
      custom < 100
    ) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "",
      });
    } else if (bill == 0 && number == 0 && custom > 0 && custom < 100) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (
      bill >= 10000 &&
      number > 0 &&
      number < 100 &&
      custom > 0 &&
      custom < 100
    ) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "",
      });
    } else if (
      number >= 100 &&
      bill > 0 &&
      bill < 10000 &&
      custom > 0 &&
      custom < 100
    ) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "Use below 100",
      });
    } else if (number >= 100 && bill == 0 && custom > 0 && custom < 100) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "Use below 100",
      });
    } else if (number == 0 && bill >= 10000 && custom > 0 && custom < 100) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (number >= 100 && bill >= 10000 && custom > 0 && custom < 100) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "Use below 100",
      });
    }
  }
  function numberChange(e) {
    const number = e.target.value;
    if (number >= 0) {
      setNumber(number);
      setNumberError({
        message: "",
      });
    }
  }
  function billChange(e) {
    const bill = e.target.value;
    if (bill >= 0) {
      setBill(bill);
      setBillError({
        message: "",
      });
    }
  }
  const buttonClicked = (e) => {
    if (bill > 0 && bill < 10000 && number > 0 && number < 100) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "",
      });

      setTipamount((bill * (e / 100)) / number);
      setTotal(Number(bill) / number + (bill * (e / 100)) / number);
    } else if (bill > 0 && bill < 10000 && !number) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (bill >= 10000 && number > 0 && number < 100) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "",
      });
    } else if (bill < 10000 && bill > 0 && number >= 100) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "Use below 100",
      });
    } else if (!bill && number > 0 && number < 100) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "",
      });
    } else if (number == 0 && bill == 0) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (bill >= 10000 && number == 0) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (number >= 100 && bill < 10000 && bill > 0) {
      setNumberError({
        message: "Use below 100",
      });
      setBillError({
        message: "",
      });
    } else if (!number && !bill) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (number >= 100 && bill >= 10000) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "Use below 100",
      });
    } else if (!number && bill >= 10000) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (number == 0 && bill >= 10000) {
      setBillError({
        message: "Use numbers below 10000",
      });
      setNumberError({
        message: "Can't be zero",
      });
    } else if (number >= 100 && bill == 0) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "Use  below 100",
      });
    } else if (number > 0 && number < 100 && bill == 0) {
      setBillError({
        message: "Can't be zero",
      });
      setNumberError({
        message: "",
      });
    } else if (bill > 0 && bill < 10000 && number == 0) {
      setBillError({
        message: "",
      });
      setNumberError({
        message: "Can't be zero",
      });
    }
  };
  function reset() {
    setNumberError({
      message: "",
    });
    setBillError({
      message: "",
    });
    setCustomNumber("Custom");
    setBill(0);
    setNumber(0);
    setTipamount(0);
    setTotal(0);
  }
  return (
    <div className="App">
      <img className="splitter" src={splitter} alt="splitter" />

      <div className="box">
        <div className="desktop-box">
          <h3 className="inputTitle">Bill</h3>
          <Input billChange={billChange} bill={bill} billError={billError} />
          <h3 className="inputTitle">Select Tip %</h3>
          <div className="buttons">
            <Buttons list={list} buttonClicked={buttonClicked} />
            <CustomInput
              customError={customError}
              customNumber={customNumber}
              customChange={customChange}
            />
          </div>
          <h3 className="inputTitle">Number of People</h3>
          <PeopleInput
            numberError={numberError}
            numberChange={numberChange}
            number={number}
          />
        </div>
        <div className="result-box">
          <div className="result-box-flex">
            <div className="result-text-flex">
              <p className="whitep">Tip Amount</p>
              <p className="greyp">/ person</p>
            </div>
            <h1 className="Tip">${tipamount.toFixed(2)}</h1>
          </div>
          {/*  */}
          <div className="result-box-flex">
            <div className="result-text-flex">
              <p className="whitep">Total</p>
              <p className="greyp">/ person</p>
            </div>
            <h1 className="Total">${total.toFixed(2)}</h1>
          </div>
          <ResetButton reset={reset} />
        </div>
      </div>
    </div>
  );
}
export default App;
