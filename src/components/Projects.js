import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../img/plant-watering-app1.png'
import plant2 from '../img/plant-watering-app2.png'
import activity1 from '../img/activity-tracker-app1.png'
import activity2 from '../img/activity-tracker-app2.png'
import meal1 from '../img/mealventory-app1.png'
import meal2 from '../img/mealventory-app2.png'
import '../styles/projects.css';

function Projects() {
    return (
      <div id='projects'>
        <section id='project-section'>
          <div id='byline-container'>
            <p id='byline'>My mission is to create communities with <span id='highlight'>compassion, empathy, and understanding.</span></p>
          </div>

          <section id='project-gallery'>
            <h2 id='project-section-title'>Projects</h2>

            <div className='project'>
            {/* <Link to='/plants'> */}
            {/* <p className='side-menu-item' value={props.content} onClick={handleChange}>about me</p> */}
              <div className='project-info'>
                <a className='project-images' href='http://www.mahiya.design/plant-watering-app/'>
                    <img className='app-img' src={plant1} alt='plant-watering app'></img>
                    <img className='app-img' src={plant2} alt='plant-watering app'></img>
                </a>

              <Link to='/plants'>
                <div className='project-text-container'>
                  <div>
                    <p className='project-title'>Plant watering app</p>
                    <p className='project-role'>UX & UI</p>
                  </div>
                </div>
              </Link>
              </div>
              <div>
                <a className='project-images' href='http://www.mahiya.design/plant-watering-app/'>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            {/* </Link> */}
            </div>

            <div className='project'>
              <div className='project-info'>

                <a className='project-images' href='http://www.mahiya.design/activity-tracker-app/'>
                  <img className='app-img' src={activity1} alt='activity-tracker app'></img>
                  <img className='app-img' src={activity2} alt='activity-tracker app'></img>
                </a>

                <div className='project-text-container'>
                  <div>
                    <p className='project-title'>Activity tracker app</p>
                    <p className='project-role'>UX & UI</p>
                  </div>
                </div>
              </div>
              <div>
                <a className='project-images' href='http://www.mahiya.design/activity-tracker-app/'>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className='project'>
              <div className='project-info'>

                <a className='project-images' href='http://www.mahiya.design/mealventory-app/'>
                  <img className='app-img' src={meal1} alt='mealventory app'></img>
                  <img className='app-img' src={meal2} alt='mealventory app'></img>
                </a>

                <div className='project-text-container'>
                  <div>
                    <p className='project-title'>Mealventory app</p>
                    <p className='project-role'>UX & UI</p>
                  </div>
                </div>
              </div>
              <div>
                <a className='project-images' href='http://www.mahiya.design/mealventory-app/'>
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

          </section>
        </section>
      </div>
    )
}
  
  export default Projects;