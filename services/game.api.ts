import { IGame } from './../types/game';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const gameApi = createApi({
    reducerPath: 'game/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    refetchOnFocus: true,
    endpoints: builder => ({
        searchGame: builder.query<IGame[], string>({
            query: (search: string) => ({
                url: `games/search`,
                params: {
                    query: search,
                }
            })
        }),
        getGameById: builder.query<IGame, string>({
            query: (id) => `${id}`,
        }),
    })
        // getAllGames: builder.query<IGame[], {count: number, offset: number}>({
        //     query: (count: number, offset: number) => ({
        //         url: `games`,
        //         params: {
        //             count,
        //             offset
        //         }
        //     }),
        // }),
})

export const { useGetGameByIdQuery, useSearchGameQuery } = gameApi