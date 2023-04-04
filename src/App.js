import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Container";
import React from "react";
function App() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [operation, setOperation] = useState("");
  const [ans, setAns] = useState("");
  const [check, setCheck] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const calculateValue = (value) => {
    let calValue = val2 === "" ? val : val2;
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setCheck(false);
      setIsPressed(true);
      setOperation(value);

      if (val !== "" && val2 !== "") {
        if (operation === "+") {
          calValue = val + val2;
        } else if (operation === "-") {
          calValue = val - val2;
        } else if (operation === "*") {
          calValue = val * val2;
        } else if (operation === "/") {
          calValue = val / val2;
        }
        setAns(calValue);
        setVal(calValue);
        setVal2("");
      }
    } else if (value === "AC" || value === "Del" || value === "=") {
      if (value === "=") {
        setIsPressed(true);
        if (val !== "" && val2 !== "") {
          if (operation === "+") {
            calValue = val + val2;
          } else if (operation === "-") {
            calValue = val - val2;
          } else if (val2 && operation === "*") {
            calValue = val * val2;
          } else if (val2 && operation === "/") {
            calValue = val / val2;
          }
          setAns(calValue);
          setVal(calValue);
          setVal2("");
          setOperation("");
        }
      } else if (value === "AC") {
        setVal("");
        setVal2("");
        setAns("");
        setCheck(true);
        setIsPressed(false);
        setOperation("");
      } else if (value === "Del") {
        if (check) {
          setVal("");
        } else {
          setVal2("");
        }
      }
    } else {
      setIsPressed(false);
      if (check) {
        if (val === "") {
          setVal(value);
        } else {
          setVal(val * 10 + value);
        }
      } else {
        if (val2 === "") {
          setVal2(value);
        } else {
          setVal2(val2 * 10 + value);
        }
      }
    }
  };

  useEffect(() => {
    console.log("val1 = ", val);
  }, [val]);
  useEffect(() => {
    console.log("val2 = ", val2);
  }, [val2]);
  useEffect(() => {
    console.log("ans = ", ans);
  }, [ans]);

  return (
    <div className="App">
      {check && <input className="input-box" value={val} readOnly />}
      {!check && !isPressed && <input className="input-box" value={val2} readOnly />}
      {!check && isPressed && <input className="input-box" value={ans} readOnly />}

      <div className="calculator-button">
        <Container handleClick={calculateValue} text="AC" className="AC-Button" />
        <Container handleClick={calculateValue} text="Del" className="Container" />
        <Container handleClick={calculateValue} text="/" className="Container" />

        <Container handleClick={calculateValue} text="1" className="Container" />
        <Container handleClick={calculateValue} text="2" className="Container" />
        <Container handleClick={calculateValue} text="3" className="Container" />
        <Container handleClick={calculateValue} text="*" className="Container" />

        <Container handleClick={calculateValue} text="4" className="Container" />
        <Container handleClick={calculateValue} text="5" className="Container" />
        <Container handleClick={calculateValue} text="6" className="Container" />
        <Container handleClick={calculateValue} text="+" className="Container" />

        <Container handleClick={calculateValue} text="7" className="Container" />
        <Container handleClick={calculateValue} text="8" className="Container" />
        <Container handleClick={calculateValue} text="9" className="Container" />
        <Container handleClick={calculateValue} text="-" className="Container" />

        <Container handleClick={calculateValue} text="." className="Container" />
        <Container handleClick={calculateValue} text="0" className="Container" />
        <Container handleClick={calculateValue} text="=" className="Equal-Button" />
      </div>
    </div>
  );
}

export default App;
