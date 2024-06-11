import { useState } from "react";
import Block from "./Block";

function App() {
  const [number, setNumber] = useState(0);
  const [vangti, setVangti] = useState({
    1000: 0,
    500: 0,
    100: 0,
    50: 0,
    20: 0,
    10: 0,
    5: 0,
    2: 0,
    1: 0,
  });

  const onChangeHanfler = (event) => {
    if (isNaN(event.target.value)) return;
    setNumber(event.target.value);
    let temp = event.target.value;
    vangti[1000] = Math.floor(temp / 1000);
    temp = temp % 1000;
    vangti[500] = Math.floor(temp / 500);
    temp = temp % 500;
    vangti[100] = Math.floor(temp / 100);
    temp = temp % 100;
    vangti[50] = Math.floor(temp / 50);
    temp = Math.floor(temp % 50);
    vangti[20] = Math.floor(temp / 20);
    temp = temp % 20;
    vangti[10] = Math.floor(temp / 10);
    temp = temp % 10;
    vangti[5] = Math.floor(temp / 5);
    temp = temp % 5;
    vangti[2] = Math.floor(temp / 2);
    temp = temp % 2;
    vangti[1] = temp;
    console.log(vangti);
    setVangti({ ...vangti });
  };
  return (
    <div>
      <form action="#">
        <h1>For taka :{number} you will need </h1>
        <input type="text" onChange={onChangeHanfler} />
        <Block taka={1000} value={vangti[1000]} />
        <Block taka={500} value={vangti[500]} />
        <Block taka={100} value={vangti[100]} />
        <Block taka={50} value={vangti[50]} />
        <Block taka={20} value={vangti[20]} />
        <Block taka={10} value={vangti[10]} />
        <Block taka={5} value={vangti[5]} />
        <Block taka={2} value={vangti[2]} />
        <Block taka={1} value={vangti[1]} />
      </form>
    </div>
  );
}

export default App;
