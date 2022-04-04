import React from 'react'
import CategoryItem from './CategoryItem/CategoryItem'
import './_Category.scss'
import { BiRightArrowAlt } from 'react-icons/bi'

const Category = ({ name}) => {
  return (
    <div className='category'>
        <div className="category-headline">
            <h4 className="category-headline__title">{name}</h4>
            <span className='category-headline__allgoods'>
              Все товары
              <BiRightArrowAlt />  
            </span>
        </div>
        
        <ul className="category-list">
            {[...new Array(4)].map((item,index) => <CategoryItem />)}
        </ul>
    </div>
  )
}

export default Category