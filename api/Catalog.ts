import DecorItemInterface from "./DecorItemInterface";

export interface CategoryI {
  id: number;
  name?: string;
  description?: string
  items?: DecorItemInterface[]
}
  
export interface CategoryListI {
  categories: CategoryI[]
}