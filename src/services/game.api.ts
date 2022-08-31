import { IBaseQeury, IGame } from './game.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gameApi = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://game-shopping.herokuapp.com/'
    }),
    endpoints: builder => ({
        getGames: builder.query<IGame[], IBaseQeury>({
            query: ({count = 8, offset = 0}) => `games?count=${count}&offset=${offset}`
        }),
        getGameById: builder.query<IGame, string | string[]>({
            query: id => `games/${id}`
        }),
        searchGame: builder.query<IGame[], string>({
            query: query => `games/search?query=${query}`
        }),
    })
})

export const {
    useGetGameByIdQuery,
    useSearchGameQuery,
    useGetGamesQuery,
} = gameApi

export const {
    getGames,
    getGameById,
    searchGame
} = gameApi.endpoints