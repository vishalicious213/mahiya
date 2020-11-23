import React from 'react'
import '../styles/thoughts.css'

// const thoughts = [
//     {
//         title: 'App critique- Amazon’s subscribe and save', 
//         text: 'This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
//     }
// ]

function Thoughts() {
    const Thought = ({ title, text }) => {
        return (
            <section className='thought'>
                <div className='thought-img'></div>
                <p className='thought-title'>{title}</p>
                <p className='thought-text'>{text}</p>
            </section>
        )
    }

    return (
        <div>
            <Thought 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
            />

            <Thought 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
            />

            <Thought 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
            />
        </div>
    )
}

export default Thoughts