import React, { useEffect } from 'react'
import ex1 from '../img/exercises/ex1.png'
import ex2 from '../img/exercises/ex2.png'
import ex3 from '../img/exercises/ex3.png'
import '../styles/exercises.css'

function Exercises() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const Exercise = ({ image, title }) => {
        return (
            <section className='exercise'>
                <div className='exercise-img-container'>
                    <img className='exercise-img' src={image} alt='application screenshot'></img>
                </div>
                <p className='exercise-title'>{title}</p>
            </section>
        )
    }

    return (
        <div id='exercises'>
            <Exercise 
                title="A designer's profile"
                image={ex1}
            />

            <Exercise 
                title='A mortgage calculator' 
                image={ex2}
            />

            <Exercise 
                title='Fashion website in mobile view' 
                image={ex3}
            />
        </div>
    )
}

export default Exercises