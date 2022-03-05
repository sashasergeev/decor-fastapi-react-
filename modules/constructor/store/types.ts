import { CategoryI } from "../../../api/Catalog";
import { DecorUsage } from "../../../api/ConstructorInterfaces";
import DecorItemInterface from "../../../api/DecorItemInterface";

// usages
export const GET_USAGES = "GET_USAGES";
export const APPLY_ITEM = "APPLY_ITEM";
export const SET_ITEM_LENGTH = "SET_ITEM_LENGTH";
export const RESET_ITEM = "RESET_ITEM";

// export interface initialUsagesStateI {
//   [key: string]: DecorUsage;
// }
export type initialUsagesStateI = { [key: string]: DecorUsage };

export interface GetUsagesI {
  type: typeof GET_USAGES;
  payload: initialUsagesStateI;
}
export interface ApplyItemI {
  type: typeof APPLY_ITEM;
  payload: DecorItemInterface;
  usage: string;
}
export interface SetItemLengthI {
  type: typeof SET_ITEM_LENGTH;
  usage: string;
  size: number;
}
export interface ResetItemI {
  type: typeof RESET_ITEM;
  usage: string;
}

export type UsageActionTypesAll =
  | GetUsagesI
  | ApplyItemI
  | SetItemLengthI
  | ResetItemI;

// catalog
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_ITEMS = "GET_ITEMS";
export const SET_APPLIES = "SET_APPLIES";
export const SET_CATALOG = "SET_CATALOG";
export const CLEAR_CATALOG = "CLEAR_CATALOG";

export interface initialCatalogStateI {
  applies?: false | string;
  chosenUsage?: false | string;
  chosenCategory?: false | CategoryI;
  categories?: CategoryI[];
  items?: DecorItemInterface[];
}
export interface GetCategoriesI {
  type: typeof GET_CATEGORIES;
  payload: CategoryI[];
}
export interface GetItemI {
  type: typeof GET_ITEMS;
  payload: DecorItemInterface[];
}
export interface SetAppliesI {
  type: typeof SET_APPLIES;
  payload: string;
}
export interface SetCatalogI {
  type: typeof SET_CATALOG;
  payload: initialCatalogStateI;
}
export interface ClearCatalogI {
  type: typeof CLEAR_CATALOG;
}

export type CatalogActionTypesAll =
  | GetCategoriesI
  | GetItemI
  | SetAppliesI
  | SetCatalogI
  | ClearCatalogI;

// ui
export const SET_UI = "SET_UI";
export const TOGGLE_PRICE = "TOGGLE_PRICE";
export const TOGGLE_SETTINGS = "TOGGLE_SETTINGS";

export interface initialCatalogUII {
  [key: string]: boolean;
}
export interface SetUII {
  type: typeof SET_UI;
  key: string;
  value: boolean;
}
export interface TogglePriceI {
  type: typeof TOGGLE_PRICE;
  payload: { [key: string]: boolean };
}
export interface ToggleSettingsI {
  type: typeof TOGGLE_SETTINGS;
  payload: { [key: string]: boolean };
}

export type CatalogUIActionTypesAll =
  | initialCatalogUII
  | SetUII
  | TogglePriceI
  | ToggleSettingsI;

// scene
export const SET_SCENE = "SET_SCENE";
export const SET_CAMERA_DEFAULT = "SET_CAMERA_DEFAULT";

export interface initialSceneI {
  zoom?: boolean;
  focus?: { x: number; y: number; z: number };
  moveBack?: boolean;
}
export interface SetSceneI {
  type: typeof SET_SCENE;
  payload: initialSceneI;
}
export interface SetCameraDefaultI {
  type: typeof SET_CAMERA_DEFAULT;
}

export type SceneActionTypesAll = SetSceneI | SetCameraDefaultI;
