import React from 'react'
// import globe from '../img/footer/globe.svg'
// import linkedin from '../img/footer/linkedin.svg'
// import medium from '../img/footer/medium.svg'
// import email from '../img/footer/email.svg'
import '../styles/footer.css'

function Footer() {
    return (
      // <div id="footer">
      //     <p id='copyright'>Copyright © 2020, Mahiya Hoque</p>
      // </div>
      <div id='footer'>
        <div className='footer-icons' id='globe-icon'></div>
        <div className='footer-icons' id='linkedin-icon'></div>
        <div className='footer-icons' id='medium-icon'></div>
        <div className='footer-icons' id='email-icon'></div>
        {/* <img className='footer-icons' src={linkedin} alt='LinkedIn icon'></img>
        <img className='footer-icons' src={medium} alt='Medium icon'></img>
        <img className='footer-icons' src={email} alt='Email icon'></img> */}
      </div>
    )
}

export default Footer;