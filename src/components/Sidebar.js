import React, { useState } from 'react'
import leftArrow from '../img/left-arrow.png'
import { Link } from 'react-router-dom'
import Resume from '../resources/Mahiya-Hoque.pdf'
import '../styles/sidebar.css';

function Sidebar() {
    const pathname = window.location.pathname
    const [itemPath, setItemPath] = useState(pathname)

    const Star = (props) => {
      return (
        <span className={`${props.itemPath===itemPath ? 'active' : 'inactive'}`}>&#x0020;</span>
      )
  }

    const MenuItem = (props) => {
      return (
        <p className={`${props.itemPath===itemPath ? 'activeMenu' : 'inactiveMenu'}`}>{props.name}</p>
      )
    }

    return (
      <div id='sidebar'>
        <div id='sidebar-top'>

          <Link className='side-menu-item' to='/' onClick={event => setItemPath('/')}>
            {/* <p className='hyper'>work</p> */}
            <MenuItem name='work' itemPath='/' />
            <Star itemPath='/' />
          </Link>

          <Link className='side-menu-item' to='/about-me' onClick={event => setItemPath('/about-me')}>
            {/* <p className='hyper'>about me</p> */}
            <MenuItem name='about me' itemPath='/about-me' />
            <Star itemPath='/about-me' />
          </Link>

          <Link className='side-menu-item' to='/thoughts' onClick={event => setItemPath('/thoughts')}>
            {/* <p className='hyper'>my thoughts</p> */}
            <MenuItem name='my thoughts' itemPath='/thoughts' />
            <Star itemPath='/thoughts' />
          </Link>

          <Link className='side-menu-item' to='/exercises' onClick={event => setItemPath('/exercises')}>
            {/* <p className='hyper'>design exercises</p> */}
            <MenuItem name='design exercises' itemPath='/exercises' />
            <Star itemPath='/exercises' />
          </Link>

          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <p className='side-menu-item side-spacer'>resume</p>
          </a>

        </div>

        <div id='sidebar-bottom'>
          <Link to='/' id='sidebar-bottom-button-container'>
            <img className='side-menu-arrow' src={leftArrow} alt='left-arrow home button' />
            <p>Home</p>
          </Link>
        </div>
      </div>
    )
}

export default Sidebar;