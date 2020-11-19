import './App.css';
// import React, { useContext } from 'react'
import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Plants from './components/case-studies/PlantWateringApp'
import Activity from './components/case-studies/ActivityTrackerApp'
import Meal from './components/case-studies/Mealventory'
// import { ContentContext } from './components/ContentContext'

function App() {
  const [content, setContent] = useState(<Projects />)
  // const [content] = useState(<AboutMe />)
  // const [content] = useState(<Plants />)
  // const [content] = useState(<Activity />)
  // const [content, setContent] = useState(<Meal />)

  // const [content] = useContext(ContentContext)
  // console.log(content)
  // let content = <Projects />
  // let content = <AboutMe />
  // let content = 1

  function handleChange(newContent) {
    setContent(newContent)
  }

  return (
    // <ContentProvider>
    <div className="wrapper">
        <div className="header">
            <Header />
        </div>
        <div className="sidebar">
            <Sidebar content={content} onChange={handleChange} />
        </div>
        <div className="content">
            {/* <Projects /> */}
            {/* {content} */}
            {/* {content === 1 ? <Projects /> : <AboutMe />} */}
            <Switch>
              <Route path='/about-me'><AboutMe /></Route>
              <Route path='/plants'><Plants /></Route>
              <Route path='/activity'><Activity /></Route>
              <Route path='/meal'><Meal /></Route>
              <Route exact path='/'><Projects /></Route>
            </Switch>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
    // </ContentProvider>
  );
}

export default App;
