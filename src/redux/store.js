import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice/cartSlice'
import productSlice from './productSlice/productSlice'
import userSlice from './userSlice/userSlice'


const rootReducer = combineReducers({
    cart: cartSlice,
    product: productSlice,
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})