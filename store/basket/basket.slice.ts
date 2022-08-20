import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { BasketState } from './basket.types';
import { IGame } from '../../types/game';
import { HYDRATE } from 'next-redux-wrapper';

const initialState: BasketState = {
  games: [
    {
      _id: "62fb215a3d106c21d85ab25a",
      name: "Hello Neighbor",
      studio: "Dynamic Pixels",
      publisher: "tinyBuild",
      price: 515,
      date: "8 дек. 2017",
      genre: "survival horror, стелс",
      tags: [
        "Хоррор",
        "Песочница",
        "Приключенческий экшен",
        "Стелс",
        "Хоррор на выживание",
        "Глубокий сюжет",
        "От первого лица",
        "3D-платформер",
        "Сложная",
        "Шутер от первого лица",
        "Выживание",
        "Стратегия",
        "3D",
        "Смешная",
        "Психологический хоррор",
        "Чёрный юмор",
        "Несколько концовок",
        "Сюрреалистичная",
        "Для всей семьи",
        "Экшен"
      ],
      description: "Hello Neighbor — игра в жанре хоррор, в которой игроку нужно проникнуть в соседский дом и узнать, что скрывает его зловещий сосед. Твой противник - искусственный интеллект, который учится на всех твоих действиях: любишь забираться в дом через окно? — Не попадись в капкан. Пытаешься убежать? — Он найдёт способ перехватить тебя.",
      rating: 39,
      picture: "http://localhost:5000/image/a57e4e5d-72c2-4eb9-9be1-f594cbd46fb2.jpg",
      video: "http://localhost:5000/video/9de54657-2b7b-40ef-9359-9dabaed48ff5.webm",
      comments: [ ],
    },
    {
      _id: "62fb215a3d106c21d85ab25b",
      name: "Hello Neighbor",
      studio: "Dynamic Pixels",
      publisher: "tinyBuild",
      price: 515,
      date: "8 дек. 2017",
      genre: "survival horror, стелс",
      tags: [
        "Хоррор",
        "Песочница",
        "Приключенческий экшен",
        "Стелс",
        "Хоррор на выживание",
        "Глубокий сюжет",
        "От первого лица",
        "3D-платформер",
        "Сложная",
        "Шутер от первого лица",
        "Выживание",
        "Стратегия",
        "3D",
        "Смешная",
        "Психологический хоррор",
        "Чёрный юмор",
        "Несколько концовок",
        "Сюрреалистичная",
        "Для всей семьи",
        "Экшен"
      ],
      description: "Hello Neighbor — игра в жанре хоррор, в которой игроку нужно проникнуть в соседский дом и узнать, что скрывает его зловещий сосед. Твой противник - искусственный интеллект, который учится на всех твоих действиях: любишь забираться в дом через окно? — Не попадись в капкан. Пытаешься убежать? — Он найдёт способ перехватить тебя.",
      rating: 39,
      picture: "http://localhost:5000/image/a57e4e5d-72c2-4eb9-9be1-f594cbd46fb2.jpg",
      video: "http://localhost:5000/video/9de54657-2b7b-40ef-9359-9dabaed48ff5.webm",
      comments: [ ],
    },
    {
      _id: "62fb215a3d106c21d85ab25c",
      name: "Hello Neighbor",
      studio: "Dynamic Pixels",
      publisher: "tinyBuild",
      price: 515,
      date: "8 дек. 2017",
      genre: "survival horror, стелс",
      tags: [
        "Хоррор",
        "Песочница",
        "Приключенческий экшен",
        "Стелс",
        "Хоррор на выживание",
        "Глубокий сюжет",
        "От первого лица",
        "3D-платформер",
        "Сложная",
        "Шутер от первого лица",
        "Выживание",
        "Стратегия",
        "3D",
        "Смешная",
        "Психологический хоррор",
        "Чёрный юмор",
        "Несколько концовок",
        "Сюрреалистичная",
        "Для всей семьи",
        "Экшен"
      ],
      description: "Hello Neighbor — игра в жанре хоррор, в которой игроку нужно проникнуть в соседский дом и узнать, что скрывает его зловещий сосед. Твой противник - искусственный интеллект, который учится на всех твоих действиях: любишь забираться в дом через окно? — Не попадись в капкан. Пытаешься убежать? — Он найдёт способ перехватить тебя.",
      rating: 39,
      picture: "http://localhost:5000/image/a57e4e5d-72c2-4eb9-9be1-f594cbd46fb2.jpg",
      video: "http://localhost:5000/video/9de54657-2b7b-40ef-9359-9dabaed48ff5.webm",
      comments: [ ],
    }
  ]
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