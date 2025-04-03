import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function getInputNumbe() {
    return Number(inputRef.current.value);
  }

  function resetAndFocusInput() {
    // inputRef.current.value = '';
    inputRef.current.focus();
  }

  function plus(e) {
    e.preventDefault();
    if (!getInputNumbe()) {
      resetAndFocusInput();
      return;
    }

    const inputNumber = getInputNumbe();
    setResult((result) => result + inputNumber);
    resetAndFocusInput();
  }

  function minus(e) {
    e.preventDefault();
    if (!getInputNumbe()) {
      resetAndFocusInput();
      return;
    }

    const inputNumber = getInputNumbe();
    setResult((result) => result - inputNumber);
    resetAndFocusInput();
  }

  function times(e) {
    e.preventDefault();
    if (!getInputNumbe()) {
      resetAndFocusInput();
      return;
    }

    const inputNumber = getInputNumbe();
    setResult((result) => result * inputNumber);
    resetAndFocusInput();
  }

  function divide(e) {
    e.preventDefault();
    if (!getInputNumbe()) {
      resetAndFocusInput();
      return;
    }

    const inputNumber = getInputNumbe();
    setResult((result) => result / inputNumber);
    resetAndFocusInput();
  }

  function resetInput(e) {
    e.preventDefault();
    resetAndFocusInput();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    resetAndFocusInput();
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
