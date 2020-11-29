import React, { useEffect } from 'react'
// import ContactForm from './ContactForm'
import aboutme from '../img/about-me.jpg'
import activity1 from '../img/activity-tracker-app1.jpg'
import activity2 from '../img/activity-tracker-app2.jpg'
import Projectx3 from './Projectx3'
import '../styles/about-me.css';

function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div id='about-me'>
            <div id='byline-container'>
                <p id='byline'>Hi there, I’m Mahiya and my mission is to create a sense of community.</p>
            </div>

            <div id='about-me-top'>
                <p className='text-content'>I have worked within the customer service fields in retail, car sales, and administrative positions, where I constantly needed to understand people. For years, I have practiced creating empathy for the problems we face routinely. This naturally brought me to the field of product design where I now solve these problems using design thinking. </p>
                <div id='about-me-img-container'>
                    <img id='about-me-img' src={aboutme} alt='Mahiya Hoque'></img>
                </div>
            </div>

            <h3 className='text-header'>What problems am I currently invested in?</h3>
            <p className='text-content'>The year 2020 has emboldened a lot of societal and political issues that had already existed. The ones I’m occupied with currently are voting-transparency and anti-racism.</p>
            <p className='text-content'>I am holding monthly meetings on meetup to discuss how we can create a platform to make anti-racism actionable. I’m also working on something that would make information around voting such as who, what, when, where, how, easier to access.</p>
            <p className='text-content'>I’m a volunteer team-member for the redesign efforts of the DSA Labor website.</p>
            <p className='text-content'>I’m also coming up with a tool  that friends and colleagues can use to queue their favorite songs insteading of needing to pause and wait while somebody finds their favorite song on YouTube or spotify (ughh!!)</p>

            <h3 className='text-header'>I would love to meet you to hear about your adventures!</h3>
            {/* <ContactForm /> */}

            <Projectx3 />
            {/* <h3 className='text-header'>My Projects</h3>
            <div className='project-images'>
                <img className='app-img' src={activity1} alt='activity-tracker app'></img>
                <img className='app-img' src={activity2} alt='activity-tracker app'></img>
            </div>         */}
        </div>    
    );
}

export default AboutMe;
