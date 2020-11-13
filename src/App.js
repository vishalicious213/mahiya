import './App.css';
import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import AboutMe from './components/AboutMe'
// import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
        <div className="header">
            <Header />
        </div>
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="content">
            <Projects />
        </div>
        <div className="footer">
            <Footer />
        </div>

        {/* <Route exact path='/' component={App} /> */}
        {/* <Route path='/about-me' component={AboutMe} /> */}
    </div>    
  );
}

export default App;
