import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IGame } from '@/services/game.types';
import { BasketState } from './basket.types';

const BASKET = 'BASKET';

const initialState: BasketState = {
  games: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<IGame>) => {
      state.games.push(action.payload);
    },
    removeGame: (state, action: PayloadAction<string>) => {
      state.games = state.games.filter(game => game._id !== action.payload);
    }
  },
})

export const {
  addGame,
  removeGame
} = basketSlice.actions

export const basketReducer = basketSlice.reducer