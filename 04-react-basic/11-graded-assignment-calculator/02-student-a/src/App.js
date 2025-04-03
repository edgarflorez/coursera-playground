import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  // FUNCTION TO ADD THE VALUE OF THE INPUT TO THE RESULT
  function plus(e) {
    e.preventDefault();
    const newResult = result + Number(inputRef.current.value);
    setResult(newResult);
    setHistory([...history, `Added ${inputRef.current.value}`]);
  }
  // FUNCTION TO SUBTRACT THE VALUE OF THE INPUT FROM THE RESULT
  function minus(e) {
    e.preventDefault();
    const newResult = result - Number(inputRef.current.value);
    setResult(newResult);
    setHistory([...history, `Subtracted ${inputRef.current.value}`]);
  }
  // FUNCTION TO MULTIPLY THE RESULT BY THE INPUT VALUE
  function times(e) {
    e.preventDefault();
    const newResult = result * Number(inputRef.current.value);
    setResult(newResult);
    setHistory([...history, `Multiplied by ${inputRef.current.value}`]);
  }
  // FUNCTION TO DIVIDE THE RESULT BY THE INPUT VALUE
  function divide(e) {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue !== 0) {
      const newResult = result / inputValue;
      setResult(newResult);
      setHistory([...history, `Divided by ${inputValue}`]);
    } else {
      alert("Cannot divide by zero");
    }
  }
  // FUNCTION TO CALCULATE THE PERCENTAGE OF THE RESULT
  function percentage(e) {
    e.preventDefault();
    const newResult = result * (Number(inputRef.current.value) / 100);
    setResult(newResult);
    setHistory([...history, `Calculated ${inputRef.current.value}% of result`]);
  }
  // FUNCTION TO CALCULATE THE SQUARE ROOT OF THE RESULT
  function sqrt(e) {
    e.preventDefault();
    const newResult = Math.sqrt(result);
    setResult(newResult);
    setHistory([...history, `Calculated square root of result`]);
  }
  // FUNCTION TO NEGATE THE RESULT (CHANGE ITS SIGN)
  function negate(e) {
    e.preventDefault();
    const newResult = -result;
    setResult(newResult);
    setHistory([...history, `Negated result`]);
  }
  // FUNCTION TO RESET THE INPUT FIELD
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }
  // FUNCTION TO RESET THE RESULT TO ZERO
  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    setHistory([]);
  }
  return (
    <div className="App">
      <div>
        <h1>Advanced Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>Result: {result}</p>
        <input
          ref={inputRef}
          type="number"
          step="any" // To allow decimals
          placeholder="Type a number"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={percentage}>%</button>
        <button onClick={sqrt}>√</button>
        <button onClick={negate}>±</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
      <div className="history">
        <h3>History</h3>
        <ul>
          {history.map((operation, index) => (
            <li key={index}>{operation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
