import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BasketState } from './basket.types';
import { IGame } from './../../types/game';

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
})

export const {
  addGame,
  removeGame
} = basketSlice.actions

export const basketReducer = basketSlice.reducer