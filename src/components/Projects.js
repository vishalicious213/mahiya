import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../img/plantWatering1.png'
import plant2 from '../img/plantWatering2.png'
import activity1 from '../img/activityTracker1.png'
import activity2 from '../img/activityTracker2.png'
import meal1 from '../img/mealventory1.png'
import meal2 from '../img/mealventory2.png'
import arrowRight from '../img/arrow-right.svg'
import '../styles/projects.css';

function Projects() {
    const Project = ({ link, img1, img2, title, role }) => {
        return (
        <div className='project'>
            <Link to={link} className='project-images'>
                <img className='app-img' src={img1} alt={title}></img>
                <img className='app-img' src={img2} alt={title}></img>
            </Link>

            <div className='project-info'>
                <div className='project-arrow'>
                    <Link to={link}>
                        {/* <i className="fas fa-arrow-right"></i> */}
                        <img src={arrowRight} alt='right-arrow' />
                    </Link>
                </div>
                <div className='project-text-container'>
                    <div>
                        <p className='project-title'>{title}</p>
                        <p className='project-role'>{role}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
      <div id='projects'>
        <section id='project-section'>
          <div id='byline-container'>
            <h1 id='byline'>My mission is to create communities with <span id='highlight-2'>compassion,</span> <span id='highlight'>empathy, and understanding.</span></h1>
          </div>

          <section id='project-gallery'>
            <h2 id='project-section-title'>Projects</h2>

            <Project 
                link='/plants'
                img1={plant1}
                img2={plant2}
                title='Plant watering app'
                role='strategy, design'
            />

            <Project 
                link='/activity'
                img1={activity1}
                img2={activity2}
                title='Activity tracker app'
                role='strategy, design'
            />

            <Project 
                link='/meal'
                img1={meal1}
                img2={meal2}
                title='Mealventory app'
                role='design'
            />

          </section>
        </section>
      </div>
    )
}

  export default Projects;