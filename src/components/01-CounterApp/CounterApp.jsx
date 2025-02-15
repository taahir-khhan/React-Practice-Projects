import React, { useState } from "react";

function CounterApp() {
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
    <div className='counter-app'>
      <div className='counter-app__container'>
        <h1 className='counter-app__heading'>Counter App</h1>

        <div className='counter-app__content'>{count}</div>

        <div>
          <button
            className='counter-app__btn counter-app__btn-increase'
            onClick={increaseCount}
          >
            Add (+)
          </button>

          <button
            className='counter-app__btn counter-app__btn-decrease'
            onClick={decreaseCount}
          >
            Remove (-)
          </button>

          <button
            className='counter-app__btn counter-app__btn-reset'
            onClick={() => setCount(0)}
          >
            Reset (🗘)
          </button>
        </div>

        <p className='counter-app__note'>(Counter Range 0 - 100)</p>
      </div>
    </div>
  );
}

export default CounterApp;
