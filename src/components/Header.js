import React from 'react'
import logo17 from '../img/logo17.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div id="header">
            <Link id='logo-Link' to='/'>
              <img id='logo' src={logo17} alt='Mahiya Hoque'></img>
            </Link>
      </div>
    )
}

  export default Header;