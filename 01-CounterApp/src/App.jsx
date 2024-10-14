import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count >= 100) return;
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div className="counter_app">
      <h1 className="heading">Counter App</h1>
      <div className="content">{count}</div>
      <div className="buttons">
        <button className="btn btn_increase" onClick={increaseCount}>
          Add {count}
        </button>
        <button className="btn btn_decrease" onClick={decreaseCount}>
          Remove {count}
        </button>
        <button className="btn btn_reset" onClick={() => setCount(0)}>
          Reset {count}
        </button>
      </div>
      <p className="note">(Counter Range 0 - 100)</p>
    </div>
  );
}

export default App;
