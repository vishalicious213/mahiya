import React from 'react'
import leftArrow from '../img/left-arrow.png'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css';

function Sidebar() {
    return (
      <div id='sidebar'>
        <div id='sidebar-top'>

          <a href='http://www.mahiya.design/'>
            <p className='side-menu-item'>work</p>
          </a>

          {/* <a href='http://www.mahiya.design/about-me/'>
            <p className='side-menu-item'>about</p>
          </a> */}

          <Link to='/about-me'>
            <p className='side-menu-item'>about me</p>
          </Link>

          <a href='http://www.mahiya.design/my-thoughts/'>
            <p className='side-menu-item'>my thoughts</p>
          </a>

          <a href='http://www.mahiya.design/'>
            <p className='side-menu-item'>design exercises</p>
          </a>          

          <a href='http://www.mahiya.design/resume/'>
            <p className='side-menu-item'>resume</p>
          </a>

        </div>

        <div id='sidebar-bottom'>
          <a id='sidebar-bottom-button-container' href='http://www.mahiya.design'>
            <img className='side-menu-arrow' src={leftArrow} alt='left-arrow home button' />
            <p>Home</p>
          </a>
        </div>
      </div>
    )
}

export default Sidebar;