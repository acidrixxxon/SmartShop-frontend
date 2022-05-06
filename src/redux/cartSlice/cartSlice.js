import { createSlice } from "@reduxjs/toolkit";
import { cartActiveStep } from "../../utils/constants";


const initialState = {
    items: [],
    itemsCount: 0,
    totalPrice: 0,
    activeStep: cartActiveStep.ORDER_ITEMS,
    data: {}
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushToCart(state,action) {
            state.items.push({
                ...action.payload,
                qty: 1
            })
            state.itemsCount += 1
            if (action.payload.discount > 0) {
                state.totalPrice += Math.ceil(action.payload.price - ((action.payload.price / 100) * action.payload.discount))
            } else {
                state.totalPrice = action.payload.price
            }
        },
        deleteFromCart(state,action) {
            const item = state.items.find(item => item._id === action.payload)
            state.items = state.items.filter(item => item._id !== action.payload)
            if (state.itemsCount > 0) {
                state.itemsCount -=1
            }
            if (item.discount > 0) {
                state.totalPrice -= Math.ceil(item.price - ((item.price / 100) * item.discount))
            } else {
                state.totalPrice -= item.price
            }
        },
        plusQty(state,action) {
            const index = state.items.map(item => item._id).indexOf(action.payload)
            const item  = state.items.find( item => item._id === action.payload)
            item.qty += 1
            state.items[index] = item
            state.itemsCount += 1
            if ( item.discount > 0) {
                state.totalPrice += Math.ceil(item.price - ((item.price / 100) * item.discount))
            } else {
                state.totalPrice += item.price
            }
        },
        minusQty(state,action) {
            const index = state.items.map(item => item._id).indexOf(action.payload)
            const item  = state.items.find( item => item._id === action.payload)
            if (item.qty > 1) {
                item.qty -= 1
                state.items[index] = item
                state.itemsCount -= 1

                if ( item.discount > 0) {
                    state.totalPrice -= Math.ceil(item.price - ((item.price / 100) * item.discount))
                } else {
                    state.totalPrice -= item.price
                }
            }

        },
        nextStep(state,action) {
            state.activeStep = action.payload
        },
        setObtaining(state,action) {
            state.data.obtaining = action.payload
        },
        setPayment(state,action) {
            state.data.payment = action.payload
        },
        setClient(state,action) {
            state.data.client = action.payload
        }
    }
})



export default cartSlice.reducer
export const { pushToCart,deleteFromCart,plusQty,minusQty,nextStep,setObtaining,setPayment,setClient } = cartSlice.actions