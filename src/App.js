import './App.css';
// import React, { useContext } from 'react'
import React, { useState } from 'react'
import Header from './components/Header'
// import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
// import AboutMe from './components/AboutMe'
// import Plants from './components/case-studies/PlantWateringApp'
// import Activity from './components/case-studies/ActivityTrackerApp'
import Meal from './components/case-studies/Mealventory'
// import { ContentContext } from './components/ContentContext'

function App() {
  // const [content, setContent] = useState(<Projects />)
  // const [content, setContent] = useState(<AboutMe />)
  // const [content] = useState(<Plants />)
  // const [content] = useState(<Activity />)
  const [content] = useState(<Meal />)

  // const [content] = useContext(ContentContext)
  // console.log(content)
  // let content = <Projects />
  // let content = <AboutMe />
  // let content = 1

  return (
    // <ContentProvider>
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
            {/* {content === 1 ? <Projects /> : <AboutMe />} */}
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
    // </ContentProvider>
  );
}

export default App;
