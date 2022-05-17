import UserService from "../../Services/UserService"
import { loginUser__error, loginUser__success, user__logout } from "./userSlice"
import { toast } from "react-toastify"
import { closeAuthModal } from "../viewSlice/viewActions"

export const login = (user) => async (dispatch) => {
    try {
        const res = await UserService.login(user)

        if (res.status === 500 && res.data.success === false) {
            dispatch(loginUser__error(res.data))
            toast.error(res.data.message)
        } else if (res.status === 200 && res.data.success === true) {
            dispatch(loginUser__success(res.data))
            dispatch(closeAuthModal())
            toast.success(res.data.message)
        }
    } catch (error) {
        console.log(error.message)
        dispatch(loginUser__error(error.message))
        toast.error(error.message)
    }
}


export const logout = () => async (dispatch) => {
    dispatch(user__logout())
    dispatch(closeAuthModal())
}
