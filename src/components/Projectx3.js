import React from 'react'

function Projectx3() {
    const Project = ({ image, title, text, link }) => {
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

    return (
        <section>
            <h2>My Projects</h2>

            <Project 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
                link='/subscribe'
            />

            <Project 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
                link='/subscribe'
            />

            <Project 
                title='App critique- Amazon’s subscribe and save' 
                text='This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.'
                link='/subscribe'
            />
        </section>
    )
}

export default Projectx3