import React, { useState } from 'react'
import leftArrow from '../img/left-arrow.png'
import { Link } from 'react-router-dom'
import Resume from '../resources/Mahiya-Hoque.pdf'
import '../styles/sidebar.css';

function Sidebar() {
    const [itemPath, setItemPath] = useState('/')

    const pathname = window.location.pathname
    const url = window.location.href
    const origin = window.location.origin

    console.log('path ', pathname)
    console.log('url ', url)
    console.log('origin ', origin)

    const Star = (props) => {
      console.log(pathname)
      console.log(props.itemPath)
      return(
      <span className={`${props.itemPath===pathname ? 'red' : 'star'}`}>*</span>
    )}

    return (
      <div id='sidebar'>
        <div id='sidebar-top'>

          <Link className='side-menu-item' to='/' onClick={event => setItemPath('/')}>
            <p className='hyper'>work</p>
            {/* <span className='star'>*</span> */}
            <Star itemPath='/' />
          </Link>

          <Link className='side-menu-item' to='/about-me' onClick={event => setItemPath('/about-me')}>
            <p className='hyper'>about me</p>
            {/* <span className='star'>*</span> */}
            <Star itemPath='/about-me' />
          </Link>

          {/* <div className='side-menu-item link'>
              <Link to='/'>
                <p>work <span>*</span></p>
              </Link>
          </div> */}
          
          {/* <Link className='side-menu-item' to='/'>
            <p>work <span>*</span></p>
          </Link> */}

          <Link to='/about-me'>
            <p className='side-menu-item'>about me</p>
          </Link>

          <Link to='/thoughts'>
            <p className='side-menu-item'>my thoughts</p>
          </Link>

          <Link to='/exercises'>
            <p className='side-menu-item'>design exercises</p>
          </Link>       

          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <p className='side-menu-item'>resume</p>
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