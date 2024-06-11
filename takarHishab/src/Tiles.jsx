export default function Tiles(props) {
  return (
    <h3>
      {props.value} {props.value == 1 ? "note" : "notes"} of {props.taka} taka.
    </h3>
  );
}
