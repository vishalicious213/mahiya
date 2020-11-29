import React from 'react'
import { Link } from 'react-router-dom'
import plant1 from '../img/plant-watering-app1.jpg'
import activity1 from '../img/case-study/activity/1.jpg'
import meal1 from '../img/mealventory-app1.jpg'
import '../styles/projects-footer.css'

function Projectx2({ app }) {
    const projectsArray = [
        {
            image: {plant1},
            title: 'Plant watering app',
            text: 'design',
            link: '/plants'
        },
        {
            image: {activity1},
            title: 'Activity tracker app',
            text: 'strategy, design',
            link: '/activity'
        },
        {
            image: {meal1},
            title: 'Mealventory app',
            text: 'design',
            link: '/meal'
        }
    ]

    let proj1 = ''
    let proj2 = ''

    if (app = 'plants') {
        proj1 = projectsArray[1]
        proj2 = projectsArray[2]
    }

    if (app = 'activity') {
        proj1 = projectsArray[0]
        proj2 = projectsArray[2]
    }

    if (app = 'meal') {
        proj1 = projectsArray[0]
        proj2 = projectsArray[1]
    }

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
                <Project {...proj1} />
                <Project {...proj2} />
                {/* <Project 
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
                /> */}
            </section>
        </section>
    )
}

export default Projectx2