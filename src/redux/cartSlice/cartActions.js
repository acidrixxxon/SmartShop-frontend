import { pushToCart,deleteFromCart,plusQty, minusQty, nextStep, setObtaining, setPayment, setClient, clearSteps } from "./cartSlice"



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

export const setObtainingData = (data) => async (dispatch) => {
    dispatch(setObtaining(data))
}

export const setPaymentMethod = (data) => async (dispatch) => {
    dispatch(setPayment(data))
}

export const setClientData = (data) => async (dispatch) => {
    dispatch(setClient(data))
}

export const clearActiveSteps = () => async (dispatch) => {
    dispatch(clearSteps())
}