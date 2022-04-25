import { pushToCart,deleteFromCart,plusQty, minusQty, nextStep } from "./cartSlice"



export const addItemToCard = (item) => async (dispatch) => {
    dispatch(pushToCart(item))
}

export const removeFromCart = (id) => async (dispatch) => {
    dispatch(deleteFromCart(id))
}

export const addQty = (id) => async (dispatch) => {
    dispatch(plusQty(id))
}

export const minQty = (id) => async (dispatch) => {
    dispatch(minusQty(id))
}

export const goToNextStep = (step) => async (dispatch) => {
    dispatch(nextStep(step))
}