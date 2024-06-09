// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>Hello this is Farhan</h1>);

function delayedFunction() {
  root.render(<h1>I hope you like my first react project</h1>);
}

function delayedFunction2() {
  root.render(
    <h1>I try to build small projects to gather ideas to build big ones</h1>
  );
}

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

function delayedFunction3() {
  root.render(myelement);
}

setTimeout(delayedFunction, 2000);
setTimeout(delayedFunction2, 4000);
setTimeout(delayedFunction3, 8000);
