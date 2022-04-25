import React from 'react'
import './_ProductData.scss'
import { AiOutlineStar } from 'react-icons/ai'
import useravatar from './../../../../assets/avatar.png'
import { useSelector } from 'react-redux'

const ProductData = () => {
    const [ tab,setTab ] = React.useState('description')

    const data = [{
        title: 'Макс. скорость до (км/ч)',
        value: '25'
    },{
        title: 'Мощность двигателя',
        value: '300'
    },{
        title: 'Пробег на одном заряде',
        value: '36'
    },{
        title: 'Тип переднего тормоза',
        value: 'Дисковый механический'
    },{
        title: 'Круиз-контроль',
        value: 'Есть'
    },{
        title: 'Тип',
        value: '-'
    }]

    const { product: { ProductDetails }} = useSelector(state => state)
    return (
        <div className='product-data'>
            <div className="product-tabs">
                <ul className="product-tabs__list">
                    <li className={tab === 'description' ? "product-tabs__item active" : 'product-tabs__item'} onClick={() => setTab('description')}>
                        Описание
                    </li>

                    <li className={tab === 'characteristics' ? "product-tabs__item active" : 'product-tabs__item'} onClick={() => setTab('characteristics')}>
                        Характеристики
                    </li>

                    <li className={tab === 'reviews' ? "product-tabs__item active" : 'product-tabs__item'} onClick={() => setTab('reviews')}>
                        Отзывы ({ProductDetails.comments.length})
                    </li>
                </ul>
            </div>

            <div className="product-tabs__content">
                {tab === 'description' && (
                    <div className="product-tabs__description">
                        <h4 className="product-tabs__title">
                            Описание {ProductDetails.title}
                        </h4>

                        <p className="product-tabs__text">
                            {ProductDetails.description}
                        </p>
                    </div>
                )}

                {tab === 'characteristics' && (
                    <div className='product-tabs__characteristics'>
                         <h4 className="product-tabs__title">
                            Характеристики {ProductDetails.title}
                        </h4>

                        <div className="product-tabs__content">
                            {ProductDetails.characteristics.length > 0 ? (
                                <ul className="product-tabs__list">
                                    {ProductDetails.characteristics.map(item => {
                                        return (
                                            <li className='product-tabs__list__item'>
                                                <div className='row row-title'>{item.title}</div>
                                                <div className='row row-value'>{item.value}</div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            ) : <span>Характеристики не доступны!</span>}
                        </div>
                    </div>
                )}

                {tab === 'reviews' && (
                    <div className='product-tabs__reviews'>
                        <h4 className="product-tabs__title">
                            Отзывы на {ProductDetails.title}
                        </h4>

                        <div className="product-tabs__row">
                            {ProductDetails.comments.length > 0 ? (
                                <ul className="product-tabs__reviews-list">
                                    {ProductDetails.comments.map(item => {
                                        return (
                                            <li className="product-tabs__reviews-item">
                                                <div className="product-tabs__reviews-item__author">
                                                    <div className="left">
                                                        <img src={useravatar} alt="useravatar" />
                                                        <span>
                                                            {item.author}
                                                        </span>
                                                    </div>
                                                    <div className="right">
                                                        <span className="rating">
                                                            {[...new Array(5)].map((item,index) => <AiOutlineStar key={index} />)}
                                                        </span>
                                                        <span className="date">
                                                            07 июня 2021
                                                        </span>
                                                    </div>
                                                </div>
    
                                                <div className="product-tabs__reviews-item__review">
                                                    {item.text}
                                                </div>
                                            </li>
                                        )}
                                    )}
                                </ul>) :
                                (<p>Пока никто не оставил отзыв. Будь-те первыми</p>)}

                            <div className='product-tabs__add-review'>
                                <button className='product-tabs__add--btn'>Добавить отзыв</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductData