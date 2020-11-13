// import './App.css';
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

function AboutMe() {
  return (
    <div className="wrapper">
        <div className="header">
            <Header />
        </div>
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="content">
            About Me
            {/* <Projects /> */}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>    
  );
}

export default AboutMe;
