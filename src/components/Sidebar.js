import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
      <div id="sidebar">
        <a href='http://www.mahiya.design/about-me/'>
          <p className='side-menu-item'>about me</p>
        </a>
        {/* <Link to='/about-me'>
          <p className='side-menu-item'>about me</p>
        </Link> */}
        <a href='http://www.mahiya.design/my-thoughts/'>
          <p className='side-menu-item'>my thoughts</p>
        </a>
        <a href='http://www.mahiya.design/resume/'>
          <p className='side-menu-item'>resume</p>
        </a>
      </div>
    )
}

export default Sidebar;