import React from 'react'
import './_DesktopSorting.scss'
import { TiArrowSortedDown } from 'react-icons/ti'

const DesktopSorting = () => {
    const [ sortVariants,setSortVariants ] = React.useState({
        byPopular: {
            id: 1,
            title: 'По популярности',
            name: 'byPopular'
        },
        byPriceToLow: {
            id: 2,
            title: 'Самые дорогие',
            name: 'toLowPrice'
        },
        byPriceToHigh: {
            id: 3,
            title: 'Самые дешевые',
            name: 'toHightPrice'
        }
    })

    const [ activeSort,setActiveSort ] = React.useState(sortVariants.byPopular)
    const [ showSort,setShowSort ] = React.useState(false)

    const toggleSortVisibility = () => setShowSort(!showSort)
    const changeActiveSortHandler = (sort) => {
        setActiveSort(sort)
        setShowSort(false)
    }
    return (
        <div className='desktopSorting'>
            <button className='desktopSorting-button' onClick={toggleSortVisibility}>
                <span className='desktopSorting-button__title'>{activeSort.title}</span>
                <span className="desktopSorting-button__arrow">
                    <TiArrowSortedDown />
                </span>
            </button>

            {showSort && <ul className="desktopSorting-list">
                {Object.keys(sortVariants).map((item) => {
                    return (
                        <li className='desktopSorting-list__item' onClick={() => changeActiveSortHandler(sortVariants[item])}>{sortVariants[item].title}</li>
                    )
                })}
            </ul>}
        </div>
  )
}

export default DesktopSorting