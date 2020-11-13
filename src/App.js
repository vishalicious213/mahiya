import './App.css';
import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

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
    </div>    
  );
}

export default App;
