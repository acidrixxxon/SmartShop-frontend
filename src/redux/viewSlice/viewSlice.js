
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    authModalOpen: false,
    cabinetActiveTab: 'GENERAL_DATA'
}



const viewSlice = createSlice({
    name: 'ViewSlice',
    initialState,
    reducers: {
        open_auth_modal(state,action) {
            state.authModalOpen = true
        },
        close_auth_modal(state,action) {
            state.authModalOpen = false
        },
        set_cabinet_active_tab(state,action) {
            state.cabinetActiveTab = action.payload
        },
        set_cabinet_active_tab_toDefault(state,action) {
            state.cabinetActiveTab = 'GENERAL_DATA'
        }
    }
})



export const { open_auth_modal,close_auth_modal,set_cabinet_active_tab,set_cabinet_active_tab_toDefault } = viewSlice.actions
export default viewSlice.reducer