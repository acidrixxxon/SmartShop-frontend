import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import './_FilterByPrice.scss'

const FilterByPrice = () => {
  return (
    <div className='filter filter-byPrice'>
        <div className="filter-header">
            <h4 className="filter-title">
                Цена, ₴
            </h4>

            <span className="filter-toggleIcon">
                <TiArrowSortedDown />
            </span>
        </div>

        <div className="filter-body">
 
        </div>
    </div>
  )
}

export default FilterByPrice