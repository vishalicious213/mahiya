import React from 'react'
import img1 from '../../img/case-study/activity/1.jpg'
import img2 from '../../img/case-study/activity/2.jpg'
import img3 from '../../img/case-study/activity/3.jpg'
import img4 from '../../img/case-study/activity/4.jpg'
import img5 from '../../img/case-study/activity/5.jpg'
import img6 from '../../img/case-study/activity/6.png'
import img7 from '../../img/case-study/activity/7.png'
import img8 from '../../img/case-study/activity/8.jpg'
import img9 from '../../img/case-study/activity/9.jpg'
import img10 from '../../img/case-study/activity/10.jpg'
import img11 from '../../img/case-study/activity/11.jpg'
import '../../styles/case-studies.css';

function Activity() {
    return (
      <div className='case-studies'>
        <h2 className='app-title' id='app-title-2'>Activity tracker app</h2>

        <p className='case-font'>Designed to positively reinforce tracking progress, motivating users feel motivated to be active.</p>
        <p className='case-font-gray'>DURATION</p>
        <p className='darker-text'>4 weeks</p>
        <p className='case-font-gray'>CROSSFUNCTIONAL TEAM</p>
        <p className='darker-text'>Front-end developers, back-end developers, project lead and UX</p>

        <h3 className='case-section-font'>Problem</h3>
        <p className='case-font'>There’s no real way begin a healthy lifestyle if you’re of the older population and someone who’s very busy with life. All the products and workout programs out there do not address the challenges that hold back a lot of individuals from getting fit.</p>

        <p className='case-section-font'>Solution overview</p>
        <div className='app-screen-container'>
          <img className='app-screen' src={img1} alt='activity tracker app screenshot'></img>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
        </div>

        <h3 className='case-section-font'>What are the current solutions accomplishing and where are they failing?</h3>
        <p className='case-font'>Plenty of workout apps and programs aim to:</p>
        <ul>
          <li>allow logging and tracking workouts, and personalize routines for users</li>
        </ul>
        <p className='case-font'>but they fail to:</p>
        <ul>
          <li>track progress toward a specific goal</li>
          <li>fails to consider the inactive population, made up of the elderly, and people with health conditions, and busy people without a work-life balance.</li>
        </ul>

        <h3 className='case-section-font'>What contributes to stagnation in activity levels?</h3>
        <p className='case-font'>Because none of us on the team are fitness trainers, we needed to find an expert who normally trains the elderly and busy adults. The following are some insights we got from Karin who trains this demographic.</p>
        <ol className='alpha-list'>
          <li>In the long-run the older population strive for mobility.</li>
          <li>The older population commonly find themselves frustrated with complex gym equipments and technologies that are confusing and overwhelming to learn.</li>
          <li>Busy individuals and beginners though want a work-life balance to relieve stress, however can’t find the time to self-care.</li>
          <li>Overtime because we are habitual beings, we become accustomed to the mundane pattern of life, unable to break free from it.</li>
        </ol>

        <h3 className='case-section-font'>How can we relieve this stagnation?</h3>
        <ol className='alpha-list'>
          <li>we could create a gaming feature where you build an entire body over time by working out specific parts of your body (aka muscle isolation).</li>
          <li>we could track progress overtime rather than tracking numerical data which can have the opposite effect.</li>
          <li>we could take a page from habit trackers and task management communities and see how they inspire movement.</li>
        </ol>

        <h3 className='case-section-font'>Movement within task management and habit trackers.</h3>
        <p className='case-font'>Google calendar is popularly used to schedule tasks and for following through with plans. It shows completed tasks on the calendar giving a sense of achievement.</p>

        <div className='app-screen-container'>
          <img className='third-img' src={img3} alt='Google Calendar schedule'></img>
        </div>

        <p className='case-font'>Being an active member of the bullet journal community, I can attest to our movement inspired through seeing  prior achievements. Journaling tracks activities, allowing you to visualize your progress and consistency.</p>

        <div className='app-screen-container'>
          <img className='app-screen' src={img4} alt='journaling in the app'></img>
          <img className='app-screen' src={img5} alt='journaling on paper'></img>
        </div>

        <h3 className='case-section-font'>How might we track workouts the same way we track our tasks or habits?</h3>
        <p className='case-font'>Similar to how one might schedule tasks using google calendar and bullet journaling, you could schedule your physical activities in order to track your progression overtime.</p>

        <div className='app-screen-container'>
          <img className='app-screen' src={img6} alt='app - activity scheduler'></img>
          <img className='app-screen' src={img7} alt='app - activity scheduler'></img>
        </div>

        <h3 className='case-section-font'>How might we create a new habit while tracking progress?</h3>
        <p className='case-font'>One of the opportunities for habit trackers is they fail to show numerical progression toward a specific goal. For example, I want to quit smoking. If I set a goal for 21 days, I want to see what percentage of the way I have completed. Then say if I happen to fall off, seeing that I completed almost 90% of the way to my 21 day goal, will remind me to keep going.</p>

        <div className='app-screen-container'>
          <img className='third-img' src={img8} alt='app - dashboard mockup'></img>
          <img className='third-img' src={img9} alt='app - dashboard mockup'></img>
        </div>
        <img className='two-thirds-img' src={img10} alt='app - dashboard mockup'></img>

        <h3 className='case-section-font'>Pandemic and compromises.</h3>
        <p className='case-font'>Because we went into COVID and having very limited resources, we made many compromises in regards to our solution. For example we had to draw constraints around what workouts we could offer. Eventhough we had the expertise of Karin who could draw up various workout plans for our demographic, we didn’t have enough time to create a whole new API. So we opted to using a prebuilt API that came with a number of workouts.</p>
        <p className='case-font'>We also didn’t have enough time to create a carousel of workouts to visually inspire users. So we resorted to using a dropdown with all the workouts in it.</p>

        <div className='app-screen-container'>
          <img className='app-screen' src={img11} alt='app - customize workout'></img>
        </div>

        <h3 className='case-section-font'>Final solution</h3>
      </div>
    )
}
  
  export default Activity;