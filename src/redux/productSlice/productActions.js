import { fetchProductDetails__request, fetchProductDetails__success, fetchProducts_success,fetchProductDetails__error, fetchProducts__error, fetchProducts__request } from '../productSlice/productSlice'
import { toast } from 'react-toastify'
import ProductService from '../../Services/ProductService'

export const getProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProducts__request())

        const res = await ProductService.getProducts()
    
        if (res.status === 200) {
            dispatch(fetchProducts_success(res.data.products))
        }
    } catch (error) {
       console.log(error.message)
       toast.error('Не удалось получить продукты!')
       dispatch(fetchProducts__error(error.message))
    }
}

export const getProductById = (id) => async (dispatch,getState) => {
    try {
        dispatch(fetchProductDetails__request())

        const { product: { HomeProducts }} = getState()
        const res = await ProductService.getProductById(id)
        
        if (HomeProducts.length === 0){
            dispatch(getProducts())
        }

        if (res.status === 200 && res.data.success === true) {
            dispatch(fetchProductDetails__success(res.data.product))
        }
    } catch (error) {
        console.log(error.message)
        toast.error('Не удалось получить детали продукта!')
        dispatch(fetchProductDetails__error(error.message))
    }
}