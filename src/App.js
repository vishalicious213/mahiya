import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Plants from './components/case-studies/PlantWateringApp'
import Activity from './components/case-studies/ActivityTrackerApp'
import Meal from './components/case-studies/Mealventory'
import Thoughts from './components/Thoughts'
import Exercises from './components/Exercises'
import Leggings from './components/thoughts/Leggings'
import Subscribe from './components/thoughts/Subscribe'

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
            <Switch>
              <Route path='/about-me'><AboutMe /></Route>
              <Route path='/plants'><Plants /></Route>
              <Route path='/activity'><Activity /></Route>
              <Route path='/meal'><Meal /></Route>
              <Route path='/thoughts'><Thoughts /></Route>
              <Route path='/exercises'><Exercises /></Route>
              <Route path='/leggings'><Leggings /></Route>
              <Route path='/subscribe'><Subscribe /></Route>
              <Route exact path='/'><Projects /></Route>
            </Switch>
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  );
}

export default App;
