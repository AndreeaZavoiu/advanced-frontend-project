import { configureStore, createStore } from '@reduxjs/toolkit'
import { notesReducer } from './notesReducer'

export const store = createStore(notesReducer)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch