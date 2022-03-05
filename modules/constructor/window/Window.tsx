import Container from "../Container";
import Canvas from "./Canvas";

const Window = () => (
  <Container
    elementOfDecor={"Window"}
    defaultSize={{ height: 120, width: 80 }}
    Canvas={Canvas}
  />
);

export default Window;
