import "./App.css";

function Car(props) {
  return (
    <li>
      <h2> {props.brand}</h2>
    </li>
  );
}
function App() {
  const cars = ["Ford", "BMW", "Audi"];
  const list = cars.map((car) => <Car brand={car} />);
  console.log(list);
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>{list}</ul>
    </>
  );
}

export default App;
