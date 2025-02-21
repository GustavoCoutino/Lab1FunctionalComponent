import PropTypes from "prop-types";
import { useState } from "react";

export function CounterApp({ value }) {
  const [counter, setCounter] = useState(0);
  CounterApp.PropTypes = {
    value: PropTypes.number.isRequired,
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
}

export default CounterApp;
