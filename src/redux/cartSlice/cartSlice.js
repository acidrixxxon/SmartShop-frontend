import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    itemsCount: 5
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state,action) {
            state.items.push(action)
            state.itemsCount += 1
        }
    }
})



export default cartSlice.reducer
export const { addItemToCart } = cartSlice.actions