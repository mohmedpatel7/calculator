import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    const keyMappings = {
      0: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      "/": "/",
      "*": "*",
      "-": "-",
      "+": "+",
      ".": ".",
      "=": "=",
      Enter: "=",
      Backspace: "BACKSPACE",
      Delete: "C",
    };

    if (keyMappings[key]) {
      if (key === "Backspace") {
        setInput((prev) => prev.slice(0, -1));
      } else if (key === "Enter") {
        handleClick("=");
      } else {
        handleClick(keyMappings[key]);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <div className="calculator">
        {/* Display */}
        <div className="display">
          <h4 className="m-0">{input || "0"}</h4>
        </div>

        {/* Buttons */}
        <div className="button-grid">
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "0",
            ".",
            "=",
            "+",
          ].map((item, index) => (
            <button key={index} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
          <button className="btn-danger" onClick={() => handleClick("C")}>
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
