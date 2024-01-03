/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ILearn } from '../../types/interfaces/Learn';

export interface ILearnState {
    learnList: ILearn[];
}

const initialState: ILearnState = {
    learnList: [],
};

export const learnSlice = createSlice({
    name: 'learn',
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<ILearn[]>) => {
            const stateValue = { ...state, learnList: action.payload };
            return stateValue;
        },
    },
});

export const { setPosts } = learnSlice.actions;
export default learnSlice.reducer;
