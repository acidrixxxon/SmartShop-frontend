import React from 'react'
import Container from '../../components/common/Container/Container'
import PageLinks from '../../components/common/PageLinks/PageLinks'
import './_ProductDetails.scss'
import img from './../../assets/img.png'
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineStar,AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { ImStatsBars } from 'react-icons/im'
import Comments from './../../assets/icons/Comments'
import ProductData from './components/ProductData/ProductData'
import Category from './../../components/Category/Category'

const ProductDetails = () => {
    const addedToCart = false
    const added = false

    return (
        <div id="productDetails-wrapper">
            <Container>
                <PageLinks category='Сигвеи' itemname='Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)' />

                <div className='product'>
                    <div className="product-gallery">
                        <Carousel dynamicHeight={true}>
                            <img src={img} alt="productimage" className='product-gallery__img'/>
                            <img src={img} alt="productimage" className='product-gallery__img'/>
                            <img src={img} alt="productimage" className='product-gallery__img'/>
                        </Carousel>
                    </div>

                    <div className="product-content">
                        <h4 className="product__title">
                            Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
                        </h4>

                        <div className="product-additional">
                            <div className="product-row row-1">
                                <div className="product__rating">
                                    <span className="product__rating-list">
                                        {[...new Array(5)].map((item,index) => <AiOutlineStar key={index} />)}
                                    </span>

                                    <span className="product__comments">
                                        <Comments className='product__comments--icon' />
                                        <span className="product__comments--count">(15)</span>
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
                                    <span className="product__price__sale">
                                        <span className="product__price__sale--oldPrice">
                                            5 400 ₽
                                        </span>
                                        <span className="product__price__sale--discount">
                                            <span>20%</span><span>— 1 000 ₽</span>
                                        </span>
                                    </span>

                                    <span className="product__price__newPrice">
                                        13 990 ₽
                                    </span>
                                </div>

                                {addedToCart ? (
                                <button className="product__buttons--btn btn--addedToCart">
                                    Уже в корзине
                                </button>) : 
                                (<button className="product__buttons--btn btn--addToCart">
                                    В корзину
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