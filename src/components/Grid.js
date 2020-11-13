import React from 'react'
import Header from './Header'
import Projects from './Projects'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../grid.css'

function Grid() {
    return (
        <div>
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
        </div>
    )
}
  
  export default Grid;