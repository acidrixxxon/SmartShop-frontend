import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import Container from '../common/Container/Container'
import './_Search.scss'

const Search = () => {
  const [ showSearch, setShowSearch ] = React.useState(false)

  const hideSearch = () => setShowSearch(false)
  const openSearch = () => {
    setShowSearch(true)
  }

  const closeHandler = (e) => {
    if (e.keyCode === 27) {
      console.log('da')
      hideSearch()
    }
  }

  React.useEffect(() => {

    document.addEventListener('keydown',closeHandler)

    return () => {
      document.removeEventListener('keydown',closeHandler)
    }
  },[])

  return (
    <>
        <button className="search__block" onClick={openSearch}>
            <BsSearch className='search__block--icon'/>
            <span className='search__block--placeholder'>Поиск</span>
        </button>

        {showSearch && (
          <>
            <div className='searchModal__layout' onClick={hideSearch}>
              <div className="searchModal__content" onClick={(e) => e.stopPropagation()}>
                <Container>
                  <input type="text" className='searchModal__input' placeholder='Введите запрос, например «Smart balance»'/>
                  <AiOutlineClose className='searchModal__closeicon' onClick={hideSearch}/>
                </Container>
              </div>
            </div>
          </>
        )}
    </>
  )
}

export default Search


