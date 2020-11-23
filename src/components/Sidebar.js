import React from 'react'
import leftArrow from '../img/left-arrow.png'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css';

function Sidebar() {
    return (
      <div id='sidebar'>
        <div id='sidebar-top'>

          <Link to='/'>
            <p className='side-menu-item'>work</p>
          </Link>

          <Link to='/about-me'>
            <p className='side-menu-item'>about me</p>
          </Link>

          <Link to='/thoughts'>
            <p className='side-menu-item'>my thoughts</p>
          </Link>

          <Link to='/'>
            <p className='side-menu-item'>design exercises</p>
          </Link>       

          <Link to='/'>
            <p className='side-menu-item'>resume</p>
          </Link>

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