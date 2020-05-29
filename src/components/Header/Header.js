import React from 'react';
import { ReactComponent as SignOut } from '../../images/icons/signout.svg'

const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='header__logo'>Papers</a>
      <nav className='header__nav header-nav'>
        <h1 className='header-nav__title'>My page</h1>
        <ul>
          <li>
            <a href='/login' className='header-nav__link header-nav__link_icon'>
              <SignOut/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
