import { CategoryI } from "../../../api/Catalog";
import { DecorUsage } from "../../../api/ConstructorInterfaces";
import DecorItemInterface from "../../../api/DecorItemInterface";

// usages
export type initialUsagesStateI = { [key: string]: DecorUsage };

// catalog
export interface initialCatalogStateI {
  applies?: false | string;
  chosenUsage?: false | string;
  chosenCategory?: false | CategoryI;
  categories?: CategoryI[];
  items?: DecorItemInterface[];
}

// ui
export interface initialCatalogUII {
  [key: string]: boolean;
}

// scene
export interface initialSceneI {
  zoom?: boolean;
  focus?: { x: number; y: number; z: number };
  moveBack?: boolean;
}
