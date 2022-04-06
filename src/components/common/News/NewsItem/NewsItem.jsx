import React from 'react'
import './_NewsItem.scss'
import { BiRightArrow } from 'react-icons/bi'

const NewsItem = () => {
  return (
    <div className='news-item'>
        <h4 className="news-item__title">
            Открытие нового магазина
        </h4>

        <div className="news-item__text">
            Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения
        </div>

        <div className="news-item__footer">
            <span className="news-item__footer--link">
                Подробнее
                <BiRightArrow />
            </span>

            <span className="news-item__footer--date">
                05 июня 2021
            </span>
        </div>
    </div>
  )
}

export default NewsItem