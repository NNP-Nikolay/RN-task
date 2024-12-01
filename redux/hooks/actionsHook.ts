import { useDispatch, useSelector } from 'react-redux';

import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, AppThunkDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useThunkDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
