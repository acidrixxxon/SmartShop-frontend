import axios from 'axios'
import { API_URL } from '../utils/settings'


class ProductService {

    getProducts = async () => {
        const res = await axios.get(`${API_URL}/product/all`)

        return res
    }

    getProductById = async (id) => {
        const res = await axios.get(`${API_URL}/product/${id}`)

        return res
    }
}


export default new ProductService()