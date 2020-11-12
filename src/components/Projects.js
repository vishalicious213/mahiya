import React from 'react'
import plant1 from '../img/plant-watering-app1.png'
import plant2 from '../img/plant-watering-app2.png'
import activity1 from '../img/activity-tracker-app1.png'
import activity2 from '../img/activity-tracker-app2.png'
import meal1 from '../img/mealventory-app1.png'
import meal2 from '../img/mealventory-app2.png'
import right_arrow from '../img/right_arrow.svg'

function Projects() {
    return (
      <div id='projects'>
        <section id='project-section'>
          <div id='byline-container'>
            <p id='byline'>My mission is to create communities with <span id='highlight'>compassion, empathy, and understanding.</span></p>
          </div>

          <section id='project=gallery'>
            <h2 id='project-section-title'>Projects</h2>

            <div className='project'>
              <div className='project-info'>
                <div className='project-images'>
                  <a href='http://www.mahiya.design/plant-watering-app/'>
                    <img id='app-img' src={plant1} alt='plant-watering app'></img>
                    <img id='app-img' src={plant2} alt='plant-watering app'></img>
                  </a>
                </div>
                <div className='project-text-container'>
                  <div>
                    <p className='project-title'>Plant watering app</p>
                    <p className='project-role'>UX & UI</p>
                  </div>
                </div>
              </div>
              <div>
              <img className='right-arrow' src={right_arrow} alt='right-arrow'></img>
              </div>
            </div>

            <div className='project'>
              <div className='project-info'>
                <div className='project-images'>
                  <a href='http://www.mahiya.design/activity-tracker-app/'>
                    <img id='app-img' src={activity1} alt='activity-tracker app'></img>
                    <img id='app-img' src={activity2} alt='activity-tracker app'></img>
                  </a>
                </div>
                <div className='project-text-container'>
                  <div>
                    <p className='project-title'>Plant watering app</p>
                    <p className='project-role'>UX & UI</p>
                  </div>
                </div>
              </div>
              <div>
              <img className='right-arrow' src={right_arrow} alt='right-arrow'></img>
              </div>
            </div>

            <div className='project'>
              <div className='project-info'>
                <div className='project-images'>
                  <a href='http://www.mahiya.design/mealventory-app/'>
                    <img id='app-img' src={meal1} alt='mealventory app'></img>
                    <img id='app-img' src={meal2} alt='mealventory app'></img>
                  </a>
                </div>
                <div className='project-text-container'>
                  <div>
                    <p className='project-title'>Plant watering app</p>
                    <p className='project-role'>UX & UI</p>
                  </div>
                </div>
              </div>
              <div>
              <img className='right-arrow' src={right_arrow} alt='right-arrow'></img>
              </div>
            </div>

          </section>
        </section>
      </div>
    )
  }
  
  export default Projects;