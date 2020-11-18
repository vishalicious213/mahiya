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

function Meal() {
    return (
      <div className='case-studies'>
        <h2 className='app-title' id='app-title-3'>Mealventory app</h2>

        <p className='case-font'>Designed to eliminate food waste and save money meal-planning.</p>
        {/* <p className='case-font-gray'>DURATION</p>
        <p className='darker-text'>4 weeks</p>
        <p className='case-font-gray'>CROSSFUNCTIONAL TEAM</p>
        <p className='darker-text'>Front-end developers, back-end developers, project lead and UX</p> */}

        <h3 className='case-section-font'>Problem</h3>
        <p className='case-font'>Inventorying grocery is a daunting task. The process requires throwing away bad food, figuring out what to do with the food that’s still good, coming up with a meal plan and making a grocery list.</p>

        <p className='case-section-font'>Solution overview</p>
        <div className='app-screen-container'>
          <img className='app-screen' src={img1} alt='activity tracker app screenshot'></img>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
        </div>

        <h3 className='case-section-font'>Accounting for all the food.</h3>
        <p className='case-font'>One of the things meal planning apps often offer is listing your food into a container, typically it’s called a pantry. But the downside to having only a pantry is if you’re someone with multiple pantries or freezers, you won’t know how to locate your food without additional context.</p>
        
        <h3 className='case-section-font'>So how might we come up with a food organization system for everyone?</h3>
        <p className='case-font'>Initially I thought I was solving for how to organize your food and I thought it would be beneficial to give users the option to organize however they wish. In thinking this way, I considered tags. I thoughts tags are used by some popular apps like airtable as a way of grouping like items.</p>
        <div className='app-screen-container'>
          <img className='app-screen' src={img1} alt='activity tracker app screenshot'></img>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
        </div>

        <div className='app-screen-container'>
          <p className='case-font'>I considered music apps for their categorization capabilities. Spotify stood out because of its versatile sorting; you’re able to see multiple playlists, recently played songs, and new music suggestions all in one screen.</p>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
        </div>
        

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
  
  export default Meal;