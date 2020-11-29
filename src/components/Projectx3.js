import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../img/plant-watering-app1.jpg'
// import activity1 from '../img/activity-tracker-app1.jpg'
import activity1 from '../img/case-study/activity/1.jpg'
import meal1 from '../img/mealventory-app1.jpg'
import '../styles/projects-footer.css'

function Projectx3() {
    const Project = ({ image, title, text, link }) => {
        return (
            <section className='project-3x'>
                <Link to={link}>
                    <div className='project-3x-img-container'>
                        <img className='project-3x-img' src={image} alt={title}></img>
                    </div>
                </Link>
                <div>
                    <p className='project-3x-title'>{title}</p>
                    <p className='project-3x-text'>{text}</p>
                </div>
            </section>
        )
    }

    return (
        <section>
            <hr />
            <h2 id='project-3x-heading'>My Projects</h2>
            <section id='projects-footer'>
                <Project 
                    title='Plant watering app' 
                    text='design'
                    link='/plants'
                    image={plant1}
                />

                <Project 
                    title='Activity tracker app' 
                    text='strategy, design'
                    link='/activity'
                    image={activity1}
                />

                <Project 
                    title='Mealventory app' 
                    text='design'
                    link='/meal'
                    image={meal1}
                />
            </section>
        </section>
    )
}

export default Projectx3