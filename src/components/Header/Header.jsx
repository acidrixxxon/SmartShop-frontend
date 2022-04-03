import React from 'react'
import AuthButton from '../AuthButton/AuthButton'
import Cart from '../common/Cart/Cart'
import Container from '../common/Container/Container'
import Logotype from '../common/Logotype/Logotype'
import WishList from '../common/WishList/WishList'
import Search from '../Search/Search'
import './_Header.scss'

const Header = () => {
  return (
    <div id="header">
        <Container>
            <div className="header__logotype">
                <Logotype />
            </div>

            <div className="header__buttons">
                <Search />
                <WishList />
                <Cart />
                <AuthButton />
            </div>
        </Container>
    </div>
  )
}

export default Header