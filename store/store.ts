import { gameApi } from './../services/game.api';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { basketSlice } from './basket/basket.slice';

const makeStore = () =>
  configureStore({
    reducer: {
      [basketSlice.name]: basketSlice.reducer,
      [gameApi.reducerPath]: gameApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gameApi.middleware),
    devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const selectBasket = (id: any) => (state: RootState) => state?.[basketSlice.name]?.[id];