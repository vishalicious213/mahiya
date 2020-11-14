import './App.css';
import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import AboutMe from './components/AboutMe'

function App() {
  let content = <Projects />
  // let content = <AboutMe />

  return (
    <div className="wrapper">
        <div className="header">
            <Header />
        </div>
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="content">
            {/* <Projects /> */}
            {content}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>    
  );
}

export default App;
