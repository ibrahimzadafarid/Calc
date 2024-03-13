import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInput(input + e.currentTarget.value);
  };

  const calculate = () => {
    setInput(calculateExpression(input));
  };
  // ! Input temizlemey
  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="keypad">
          <button onClick={clearInput}>C</button>
          <button value="/" onClick={handleClick}>
            /
          </button>
          <button value="*" onClick={handleClick}>
            *
          </button>
          <button value="-" onClick={handleClick}>
            -
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button value="+" onClick={handleClick}>
            +
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button className="equal" onClick={calculate}>
            =
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button value="." onClick={handleClick}>
            .
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}

function calculateExpression(expression: string): string {
  try {
    const operators = expression.split(/[\d.]+/).filter(Boolean);
    const operands = expression.split(/[^.\d]+/).map(Number);
    let result = operands[0];

    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case "+":
          result += operands[i + 1];
          break;
        case "-":
          result -= operands[i + 1];
          break;
        case "*":
          result *= operands[i + 1];
          break;
        case "/":
          if (operands[i + 1] === 0) {
            return "Error: Division by zero";
          }
          result /= operands[i + 1];
          break;
        default:
          break;
      }
    }

    return result.toString();
  } catch (error) {
    return "Error";
  }
}

export default Calculator;
