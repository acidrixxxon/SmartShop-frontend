import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit'
import cartSlice from './cartSlice/cartSlice'


const rootReducer = combineReducers({
    cart: cartSlice
})

export const store = configureStore({
    reducer: rootReducer
})