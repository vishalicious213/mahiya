import React, { useEffect } from 'react'
import '../styles/thoughts.css'
import { Link } from 'react-router-dom'

function Thoughts() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    const Thought = ({ image, title, text, link }) => {
        return (
            <section className='thought'>
                <Link to={link}>
                    <div className='thought-img'></div>
                </Link>
                <p className='thought-title'>{title}</p>
                <p className='thought-text'>{text}</p>
                <Link to='/thoughts'>
                    <p className='read-more'>Read more</p>
                </Link>
            </section>
        )
    }

    return (
        <div id='thoughts'>
            <Thought 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
                link='/thoughts'
            />

            <Thought 
                title='How might we find the perfect leggings?' 
                text='.....This is a recording of how I would “UX” finding the perfect leggings. '
                link='/thoughts'
            />

            <Thought 
                title='A study of visual hierarchy in streaming websites' 
                text='Creating designs from only imagination, simply for aesthetical achievements can fail to convey messages and important information. So let’s look at the principles behind some well-known landing pages and how they relay information to users.'
                link='/thoughts'
            />
        </div>
    )
}

export default Thoughts