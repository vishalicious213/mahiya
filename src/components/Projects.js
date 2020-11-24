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
    const Project = ({ link, img1, img2, title }) => {
        return (
        <div className='project'>
            <div className='project-info'>
                <Link to={link} className='project-images'>
                    <img className='app-img' src={img1} alt='plant-watering app'></img>
                    <img className='app-img' src={img2} alt='plant-watering app'></img>
                </Link>
                <div className='project-text-container'>
                    <div>
                        <p className='project-title'>{title}</p>
                        <p className='project-role'>UX & UI</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={link} className='project-images'>
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
        )
    }

    return (
      <div id='projects'>
        <section id='project-section'>
          <div id='byline-container'>
            <p id='byline'>My mission is to create communities with <span id='highlight'>compassion, empathy, and understanding.</span></p>
          </div>

          <section id='project-gallery'>
            <h2 id='project-section-title'>Projects</h2>

            <Project 
                link='/plants'
                img1={plant1}
                img2={plant2}
                title='Plant watering app'
            />

            <Project 
                link='/activity'
                img1={activity1}
                img2={activity2}
                title='Activity tracker app'
            />

            <Project 
                link='/meal'
                img1={meal1}
                img2={meal2}
                title='Mealventory app'
            />

          </section>
        </section>
      </div>
    )
}

  export default Projects;