import './App.css';
import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div class="wrapper">
        <div class="header">
            <Header />
        </div>
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="content">
            <Projects />
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>    
  );
}

export default App;
