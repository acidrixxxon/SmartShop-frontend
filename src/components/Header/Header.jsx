import React from 'react'
import SignIn from '../Sign-in/SignIn'  
import Cart from '../common/Cart/Cart'
import Container from '../common/Container/Container'
import Logotype from '../common/Logotype/Logotype'
import WishList from '../common/WishList/WishList'
import Search from '../Search/Search'
import './_Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
        <Container>
            <div className="header__logotype">
                <Link className="header__link" to="/">
                  <Logotype />
                </Link>
            </div>

            <div className="header__buttons">
                <Search />
                <WishList />
                <Cart />
                <SignIn />
            </div>
        </Container>
    </div>
  )
}

export default Header