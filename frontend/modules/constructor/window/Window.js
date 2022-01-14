import Container from "../Container";
import Canvas from "./Canvas";

const Window = () => (
  <Container
    elementOfDecor={"Окно"}
    defaultSize={{ height: 120, width: 80 }}
    Canvas={Canvas}
  />
);

export default Window;
