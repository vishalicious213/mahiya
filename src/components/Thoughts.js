import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Projectx3 from './Projectx3'
import '../styles/thoughts.css'

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
                <Link to={link}>
                    <p className='read-more'>Read more</p>
                </Link>
            </section>
        )
    }

    const ThoughtLink = ({ image, title, text, link }) => {
        return (
            <section className='thought'>
                <a href={link}>
                    <div className='thought-img'></div>
                </a>
                <p className='thought-title'>{title}</p>
                <p className='thought-text'>{text}</p>
                <a href={link}>
                    <p className='read-more'>Read more</p>
                </a>
            </section>
        )
    }

    return (
        <div id='thoughts'>
            <Thought 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
                link='/subscribe'
            />

            <Thought 
                title='How might we find the perfect leggings?' 
                text='.....This is a recording of how I would “UX” finding the perfect leggings. '
                link='/leggings'
            />

            <ThoughtLink 
                title='A study of visual hierarchy in streaming websites' 
                text='Creating designs from only imagination, simply for aesthetical achievements can fail to convey messages and important information. So let’s look at the principles behind some well-known landing pages and how they relay information to users.'
                link='https://medium.com/swlh/analyzing-the-use-of-visual-hierarchy-2d9516da189e?source=friends_link&sk=a63d99aee5c8a2cb485e1fc7aa4fe8ac'
            />

            <Projectx3 />
        </div>
    )
}

export default Thoughts