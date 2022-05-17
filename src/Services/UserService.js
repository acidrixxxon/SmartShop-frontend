import axios from 'axios'
import { API_URL } from '../utils/settings'



class UserService {

    async login(data) {
        try {
            const user = await axios.post(`${API_URL}/user/login`,data)

            return user
        } catch (error) {
            console.log(error.message,error.response)
            return error.response
        }
    }
}


export default new UserService()