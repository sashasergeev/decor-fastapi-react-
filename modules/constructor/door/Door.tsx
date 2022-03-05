import Container from "../Container";
import Canvas from "./Canvas";

const Door = () => (
  <Container
    elementOfDecor={"Door"}
    defaultSize={{ height: 190, width: 90 }}
    Canvas={Canvas}
  />
);

export default Door;
