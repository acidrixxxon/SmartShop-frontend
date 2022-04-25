import React from 'react'
import Container from '../../components/common/Container/Container'
import PageLinks from '../../components/common/PageLinks/PageLinks'
import './_ProductDetails.scss'
import img from './../../assets/img.png'
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineStar,AiOutlineHeart,AiFillHeart,AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { BsCartCheck } from 'react-icons/bs'
import { ImStatsBars } from 'react-icons/im'
import Comments from './../../assets/icons/Comments'
import ProductData from './components/ProductData/ProductData'
import Category from './../../components/Category/Category'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../redux/productSlice/productActions'
import { useParams } from 'react-router-dom'
import { addItemToCard, removeFromCart } from '../../redux/cartSlice/cartActions'

const ProductDetails = () => {
    const { id } = useParams()
    const added = false

    const { product: { ProductDetails,ProductDetailsLoader },cart } = useSelector(state => state)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getProductById(id))
    },[dispatch])

    if (ProductDetailsLoader === true) return <span>Loading...</span>
    return (
        <div id="productDetails-wrapper">
            <Container>
                <PageLinks category={ProductDetails.category.name} itemname={ProductDetails.title} />

                <div className='product'>
                    <div className="product-gallery">
                        <Carousel dynamicHeight={true}>
                            {ProductDetails.img.map(item => (<img src={item} alt="productimage" key={item} className='product-gallery__img'/>))}
                        </Carousel>
                    </div>

                    <div className="product-content">
                        <h4 className="product__title">
                             {ProductDetails.title}
                        </h4>

                        <div className="product-additional">
                            <div className="product-row row-1">
                                <div className="product__rating">
                                    <span className="product__rating-list">
                                        {[...new Array(5)].map((item,index) => <AiOutlineStar key={index} />)}
                                    </span>

                                    <span className="product__comments">
                                        <Comments className='product__comments--icon' />
                                        <span className="product__comments--count">({ProductDetails.comments.length})</span>
                                    </span>
                                </div>

                                <div className="product__icons">
                                    <button className='product__icon'>
                                        {!added ? <AiFillHeart /> :<AiOutlineHeart /> }
                                    </button>
                                    <button className='product__icon'>
                                        <ImStatsBars />
                                    </button>
                                </div>
                            </div>

                            <div className="product-row row-2">
                                <div className="product__price">
                                    {ProductDetails.discount !== 0 ? ( 
                                        <span className="product__price__sale">
                                            <span className="product__price__sale--oldPrice">
                                                {ProductDetails.price} ₴
                                            </span>
                                            <span className="product__price__sale--discount">
                                                <span>20%</span><span>— 1 000 ₴</span>
                                            </span>
                                            <span className="product__price__newPrice">
                                                {Math.ceil((ProductDetails.price - ((ProductDetails.price / 100) * ProductDetails.discount)))} ₴
                                            </span>
                                        </span>) : (
                                        <span className='product__price__newPrice'>
                                            {ProductDetails.price} ₴
                                        </span>
                                        )}
                                </div>

                                {cart.items.find(item => item.id === ProductDetails.id) === undefined ?
                                    (<button className="product__buttons--btn btn--addToCart" onClick={() => dispatch(addItemToCard(ProductDetails))}>
                                        В корзину
                                        <AiOutlineShoppingCart />
                                    </button>) : 
                                    (<button className="product__buttons--btn btn--addedToCart" onClick={() => dispatch(removeFromCart(id))}>
                                        Уже в корзине
                                        <BsCartCheck />
                                    </button>)}
                            </div>
                        </div>

                        <div className="product-nuances">
                            <div className="product-nuances__nuance">
                                <span className="product-nuances__nuance--title">
                                    <MdOutlineDeliveryDining />
                                    Доставка
                                </span>
                                <p className="product-nuances__nuance--text">
                                    Доставим по Санкт-Петербургу в течение 2 часов и бесплатно. Стоимость доставки в другие города уточняйте у менеджера.
                                </p>
                            </div>

                            <div className="product-nuances__nuance">
                                <span className="product-nuances__nuance--title">
                                    <MdOutlineDeliveryDining />
                                    Оплата
                                </span>
                                <p className="product-nuances__nuance--text">
                                    Принимаем к оплате как наличный, так и безналичный расчёт. Возможна оплата электронными кошельками.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductData />
                <Category name='Рекомендуем' item={[]} />
            </Container>
        </div>
    )
}

export default ProductDetails