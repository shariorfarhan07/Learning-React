import { useState } from "react";
import "./App.css";

function Nested() {
  return <h1> Nested component</h1>;
}


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 2)}>-2</button>
        <button onClick={() => setCount((count) => count - 1)}>-1</button>
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
        <button onClick={() => setCount((count) => count + 2)}>+2</button>
        <Nested />
      </div>
    </>
  );
}

export default App;
