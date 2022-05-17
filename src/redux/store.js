import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice/cartSlice'
import productSlice from './productSlice/productSlice'
import userSlice from './userSlice/userSlice'
import viewSlice from './viewSlice/viewSlice'


const rootReducer = combineReducers({
    cart: cartSlice,
    product: productSlice,
    user: userSlice,
    view: viewSlice
})

export const store = configureStore({
    reducer: rootReducer
})