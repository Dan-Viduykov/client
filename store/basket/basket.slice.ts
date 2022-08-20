import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { BasketState } from './basket.types';
import { IGame } from '../../types/game';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: BasketState = {
  games: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<IGame>) => {
      state.games.push(action.payload)
    },
    removeGame: (state, action: PayloadAction<string>) => {
      state.games.filter(game => game._id !== action.payload)
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
        console.log('HYDRATE', action.payload);
        return {
            ...state,
            ...action.payload.basket,
        };
    },
},
})

export const { addGame, removeGame } = basketSlice.actions
export const selectBakset = (state: RootState) => state.basket.games
export default basketSlice.reducer