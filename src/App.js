// src/Calculator.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Calculator = () => {
  const [display, setDisplay] = useState("");


  
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  const handleKeyPress = (event) => {
      const key = event.key;
      if (/^[0-9+\-*/.=cC]$/.test(key)) {
        if (key === "=") {
          handleCalculate();
        } else if (key === "Enter") {
          // Handle Enter key for calculation (if you want)
          handleCalculate();
        } else if (key === "c" || key === "C") {
          handleClear();
        } else {
          handleButtonPress(key);
        }
      }
  }

  const handleButtonPress = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <Container className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonPress("1")}>1</button>
          <button onClick={() => handleButtonPress("2")}>2</button>
          <button onClick={() => handleButtonPress("3")}>3</button>
          <button onClick={() => handleButtonPress("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress("4")}>4</button>
          <button onClick={() => handleButtonPress("5")}>5</button>
          <button onClick={() => handleButtonPress("6")}>6</button>
          <button onClick={() => handleButtonPress("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress("7")}>7</button>
          <button onClick={() => handleButtonPress("8")}>8</button>
          <button onClick={() => handleButtonPress("9")}>9</button>
          <button onClick={() => handleButtonPress("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleButtonPress("0")}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonPress("/")}>/</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;

  button {
    height: 70px;
    font-size: 2rem;
    width: 70px;
    box-shadow: inset 3px 2px 30px rgb(234, 233, 233);
    border: 1px solid lightgrey;
  }
  .display {
    height: 80px;
    width: 280px;
    padding: 10px;
    overflow-x: scroll;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    box-shadow: inset 3px 2px 30px lightgrey;
    font-size: 2rem;
    text-align: right;
    white-space: nowrap;
  }
`;
export default Calculator;
