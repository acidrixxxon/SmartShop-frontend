
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: {},
    accessToken: null,
    loading: false,
    error: null
}



const userSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        loginUser__request(state) {
            state.loading = true
        },
        loginUser__success(state,action) {
            state.user = action.payload.user
            state.accessToken = action.payload.access_token
            state.loading = false
        },
        loginUser__error(state,action) {
            state.error = action.payload
            state.loading = false
        },
        user__logout(state) {
            state.error = null
            state.user = {}
            state.accessToken = null
        }
    }
})



export const { loginUser__error, loginUser__request, loginUser__success, user__logout } = userSlice.actions
export default userSlice.reducer