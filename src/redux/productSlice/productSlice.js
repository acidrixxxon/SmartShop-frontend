
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    HomeProducts: [],
    HomeLoader: false,
    HomeError: null,
    ProductDetails: {
        category: {},
        img: [],
        comments: []
    },
    ProductDetailsLoader: false,
    ProductDefailsError: null
}



const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        fetchProducts_success(state,action) {
            state.HomeProducts = action.payload
            state.HomeLoader = false
        },
        fetchProducts__request(state) {
            state.HomeLoader = true
        },
        fetchProducts__error(state,action) {
            state.HomeLoader = false
            state.HomeError = action.payload
        },
        fetchProductDetails__request(state) {
            state.ProductDetailsLoader = true
        },
        fetchProductDetails__success(state,action) {
            state.ProductDetailsLoader = false
            state.ProductDetails = action.payload
        },
        fetchProductDetails__error(state,action) {
            state.ProductDetailsLoader = false
            state.ProductDefailsError = action.payload
        }
    }
})



export default productSlice.reducer
export const { fetchProducts_success, fetchProducts__request, fetchProducts__error, fetchProductDetails__request, fetchProductDetails__success, fetchProductDetails__error } = productSlice.actions