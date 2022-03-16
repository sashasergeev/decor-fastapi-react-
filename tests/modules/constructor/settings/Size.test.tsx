import { render, screen, cleanup } from "@testing-library/react";
import Size from "../../../../modules/constructor/settings/Size";
import ConstructorWrapper from "../ConstructorWrapper";
import user from "@testing-library/user-event";

type sizes = { width: number; height: number };
interface SizePropsI {
  curr: sizes;
  applySize: () => void;
}

const sizeProps: SizePropsI = {
  curr: { width: 80, height: 120 },
  applySize: (): void => {},
};

const WrappedComponent = () => (
  <ConstructorWrapper>
    <Size {...sizeProps} />
  </ConstructorWrapper>
);

describe("Constructor: Size settings", () => {
  let height: HTMLInputElement;
  let width: HTMLInputElement;
  beforeEach(() => {
    render(<WrappedComponent />);
    height = screen.getByLabelText("Высота");
    width = screen.getByLabelText("Ширина");
  });

  it("renders with all elements", () => {
    // components title
    expect(screen.getByText("Размер окна")).toBeInTheDocument();
    // components inputs with initial data from props
    expect(+height.value).toBe(sizeProps.curr.height);
    expect(+width.value).toBe(sizeProps.curr.width);
  });

  describe("another sizes can be applied - ui", () => {
    const heightTest = 100;
    const widthTest = 60;

    it("input new, test sizes", () => {
      user.type(height, `{selectall}${heightTest}`);
      user.type(width, `{selectall}${widthTest}`);
      expect(+height.value).toBe(heightTest);
      expect(+width.value).toBe(widthTest);
    });
    it("apply new sizes", () => {
      sizeProps.curr.height = heightTest;
      sizeProps.curr.width = widthTest;
      cleanup();
      render(<WrappedComponent />);
      user.click(screen.getByText("Применить"));
      expect(screen.getByText("в: 100 см, ш: 60 см")).toBeInTheDocument();
    });
  });
});
