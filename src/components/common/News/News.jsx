import React from 'react'
import NewsItem from './NewsItem/NewsItem'
import './_News.scss'
import { BiRightArrowAlt } from 'react-icons/bi'

const News = () => {
  return (
    <div className='news'>
        <div className="news-headline">
            <h4 className="news-headline__title">
                Новости
            </h4>
            <span className="news-headline__allgoods">
                Читать все 
                <BiRightArrowAlt />  
            </span>
        </div>
        <div className="news-container">
            <NewsItem />
            <NewsItem />
        </div>
    </div>
  )
}

export default News