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

setTimeout(delayedFunction, 2000);

setTimeout(delayedFunction2, 4000);
