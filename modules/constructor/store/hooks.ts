import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppState } from "./reducers";
import { AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
