import Container from "../Container";
import Canvas from "./Canvas";

const Door = () => (
  <Container
    elementOfDecor={"Дверь"}
    defaultSize={{ height: 190, width: 90 }}
    Canvas={Canvas}
  />
);

export default Door;
