import { TypedUseSelectorHook } from './../../node_modules/react-redux/src/types';
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from '../store';
import { useDispatch } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();
