import { close_auth_modal, open_auth_modal, set_cabinet_active_tab } from "./viewSlice"



export const openAuthModal = () => async (dispatch) => {
    dispatch(open_auth_modal())
}

export const closeAuthModal = () => async (dispatch) => {
    dispatch(close_auth_modal())
}

export const setCabinetActiveTab = (tabname) => async (dispatch) => {
    dispatch(set_cabinet_active_tab(tabname))
}