import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispathch, RootState } from "../store/reducer/index.ts";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispathch>();
