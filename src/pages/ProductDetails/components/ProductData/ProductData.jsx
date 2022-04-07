import React from 'react'
import './_ProductData.scss'
import { AiOutlineStar } from 'react-icons/ai'
import useravatar from './../../../../assets/avatar.png'

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
                        Отзывы (5)
                    </li>
                </ul>
            </div>

            <div className="product-tabs__content">
                {tab === 'description' && (
                    <div className="product-tabs__description">
                        <h4 className="product-tabs__title">
                            Описание гироскутера Smart Balance Well 6.5
                        </h4>

                        <p className="product-tabs__text">
                            Вопрос безопасности всегда стоит очень остро, в этом году производители решили его следующим образом — снабдили модель качественной задней и передней подсветкой, поэтому пользователь может не переживать о том, что его будет незаметно на дороге в тёмное время суток.
                            На руле имеется яркий качественный дисплей, где отображается вся актуальная и необходимая информация — скорость, пробег и др. Кроме того, на руле имеется кнопка включения и выключения подсветки, звуковой сигнал и кнопка настроек. Таким образом, все необходимое для управления самокатом находится у пользователя под рукой.
                            Для комфорта прогулок электросамокат снабжён передним и задним амортизаторами. Вы можете перемещаться не только по ровному городскому асфальту, но и по неровностям, которые не затруднят ваше перемещение.
                            Складной механизм и небольшой вес (11 кг) делают модель эргономичной. В сложенном виде самокат занимает совсем мало места — его легко перевозить как в багажнике машины, так и в общественном транспорте. При складывании самокат фиксируется с помощью крючка к заднему крылу. А для того, чтобы разложить его, необходимо, нажав на заднее крыло, приподнять руль. Характерный щелчок говорит о том, что самокат разложен полностью и готов к эксплуатации.
                            Стоит отметить, что электросамокат очень быстро стартует — вам не надо отталкиваться или разгоняться. Выдерживает до 120 кг, в процессе изготовления использовались только качественные материалы.
                            Быстрый, лёгкий, компактный — прекрасный выбор для ценителей удобства!
                        </p>
                    </div>
                )}

                {tab === 'characteristics' && (
                    <div className='product-tabs__characteristics'>
                         <h4 className="product-tabs__title">
                            Характеристики гироскутера Smart Balance Well 6.5
                        </h4>

                        <div className="product-tabs__content">
                            {data.length > 0 ? (
                                <ul className="product-tabs__list">
                                    {data.map(item => {
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
                            Отзывы на гироскутера Smart Balance Well 6.5
                        </h4>

                        <div className="product-tabs__row">
                            <ul className="product-tabs__reviews-list">
                                <li className="product-tabs__reviews-item">
                                    <div className="product-tabs__reviews-item__author">
                                        <div className="left">
                                            <img src={useravatar} alt="useravatar" />
                                            <span>
                                                Александр
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
                                        Катаюсь каждый день после работы, заряд держит отлично!
                                    </div>
                                </li>
                            </ul>

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