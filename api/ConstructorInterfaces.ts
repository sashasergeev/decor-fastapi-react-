import DecorItemInterface from "./DecorItemInterface";

type DecorItemT = {
  id: number;
  name: string;
  height: number;
  width: number;
  price: number;
  category_id?: number;
  size?: number;
};

type DecorItemFalsable = DecorItemInterface | false;

export interface DecorUsage {
  id: number;
  name: string;
  chosen: DecorItemFalsable;
}

export interface CanvasProps {
  size: { [key: string]: number };
  decor: { [key: string]: DecorUsage };
}

export interface BasicElementsProps {
  position: [number, number, number];
  size: [number, number, number];
  variant?: string;
  usage?: string;
}
