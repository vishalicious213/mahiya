import React from 'react'
import '../styles/footer.css'

function Footer() {
    return (
      <div id='footer'>
        <a target="_blank" rel="noopener noreferrer" href='https://dribbble.com/mahiya17'>
          <div className='footer-icons' id='globe-icon'></div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='http://www.linkedin.com/in/mahiya17'>
          <div className='footer-icons' id='linkedin-icon'></div>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://mahiya17.medium.com/'>
          <div className='footer-icons' id='medium-icon'></div>
        </a>

        <a href='mailto:mahiya17@gmail.com'>
          <div className='footer-icons' id='email-icon'></div>
        </a>
      </div>
    )
}

export default Footer;