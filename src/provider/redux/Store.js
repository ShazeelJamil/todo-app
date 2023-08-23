import { configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from '../Slices/TodoSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { TodoQuery } from '../query/TodoQuery'

export const store =configureStore({
    reducer: {
        [TodoSlice.name]: TodoSlice.reducer,
        [TodoQuery.reducerPath]: TodoQuery.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(TodoQuery.middleware),
})
setupListeners(store.dispatch)