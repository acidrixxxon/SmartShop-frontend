import React from 'react'
import FilterByPrice from './FilterByPrice/FilterByPrice'
import './_SidebarFilters.scss'

const SidebarFilters = () => {
  return (
    <div className='sidebarFilters'>
      <FilterByPrice />
    </div>
  )
}

export default SidebarFilters