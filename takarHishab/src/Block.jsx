import Tiles from "./Tiles";


export default function Block(props) {
  return (
    props.value!=0 && <Tiles taka={props.taka} value={props.value} />
  )
}
