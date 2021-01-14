import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../img/projects/plant-3x.jpg'
import activity1 from '../img/projects/act-3x.jpg'
import meal1 from '../img/projects/meal-3x.jpg'
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
                    title='Activity tracker app' 
                    text='strategy, design'
                    link='/activity'
                    image={activity1}
                />

                <Project 
                    title='Plant watering app' 
                    text='strategy, design'
                    link='/plants'
                    image={plant1}
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