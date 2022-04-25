import React from 'react'
import CategoryItem from './CategoryItem/CategoryItem'
import './_Category.scss'
import { BiRightArrowAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'

const Category = ({ name}) => {

  const { product: { HomeLoader,HomeProducts }} = useSelector(state => state)

  if (HomeProducts?.length === 0 ) return null
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
            {HomeProducts?.slice(0,4).map((item) => <CategoryItem key={item.id} item={item} />)}
        </ul>
    </div>
  )
}

export default Category