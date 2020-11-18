import React from 'react'
import img1 from '../../img/case-study/plants/1.jpg'
import img2 from '../../img/case-study/plants/2.jpg'
import img3 from '../../img/case-study/plants/3.jpg'
import img4 from '../../img/case-study/plants/4.jpg'
import img5 from '../../img/case-study/plants/5.jpg'
import img6 from '../../img/case-study/plants/6.png'
import img7 from '../../img/case-study/plants/7.png'
import img8 from '../../img/case-study/plants/8.jpg'
import img9 from '../../img/case-study/plants/9.jpg'
import img10 from '../../img/case-study/plants/10.jpg'
import img11 from '../../img/case-study/plants/11.jpg'
import img12 from '../../img/case-study/plants/12.jpg'
import img13 from '../../img/case-study/plants/13.jpg'
import img14 from '../../img/case-study/plants/14.jpg'
import img15 from '../../img/case-study/plants/15.jpg'
import img16 from '../../img/case-study/plants/16.jpg'
import img17 from '../../img/case-study/plants/17.jpg'
import img18 from '../../img/case-study/plants/18.jpg'
import img19 from '../../img/case-study/plants/19.jpg'
import img20 from '../../img/case-study/plants/20.jpg'
import downArrow from '../../img/case-study/down-arrow.png'
import '../../styles/case-studies.css';

function Activity() {
    return (
      <div className='case-studies'>
        <h2 id='app-title'>Activity tracker app</h2>

        <p className='case-font'>Designed to positively reinforce tracking progress, motivating users feel motivated to be active.</p>
        <p className='case-font-gray'>DURATION</p>
        <p className='darker-text'>4 weeks</p>
        <p className='case-font-gray'>CROSSFUNCTIONAL TEAM</p>
        <p className='darker-text'>Front-end developers, back-end developers, project lead and UX</p>

        <h3 className='case-section-font'>Problem</h3>
        <p className='case-font'>There’s no real way begin a healthy lifestyle if you’re of the older population and someone who’s very busy with life. All the products and workout programs out there do not address the challenges that hold back a lot of individuals from getting fit.</p>

        <p className='case-section-font'>Solution overview</p>
        <div className='app-screen-container'>
          <img className='app-screen' src={img1} alt='plant watering app screenshot'></img>
          <img className='app-screen' src={img2} alt='plant watering app screenshot'></img>
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

        {/* <img className='down-arrow' src={downArrow} alt='downward-pointing arrow'></img> */}

        <p className='case-font'>Being an active member of the bullet journal community, I can attest to our movement inspired through seeing  prior achievements. Journaling tracks activities, allowing you to visualize your progress and consistency.</p>

        {/* <img className='down-arrow' src={downArrow} alt='downward-pointing arrow'></img> */}

        <h3 className='case-section-font'>How might we track workouts the same way we track our tasks or habits?</h3>
        <p className='case-font'>Similar to how one might schedule tasks using google calendar and bullet journaling, you could schedule your physical activities in order to track your progression overtime.</p>

        <h3 className='case-section-font'>The Feng Shui Enthusiast</h3>
        <div className='text-and-img'>
          <p className='case-font'>Loves adopting plants, but can’t get them organized to save her life. Her partner thinks she owns too many plants for their small apartment. She feels frustrated because often these plants have different needs and not many ways to tell them apart.</p>
          <img className='face' src={img4} alt='smling womans face'></img>
        </div>
        <p className='case-font'>I put myself in her shoes and stopped at every point in her journey to understand her needs, goals, and frustrations.</p>

        <img className='full-img' src={img5} alt='user experience chart'></img>

        <h3 className='case-section-font'>Information Architecture</h3>
        <p className='case-font'>Using my new found growth, I was ready to create the userflow using some predetermined tasks.</p>
        <div>
          <img className='app-screen-4' src={img6} alt='plant watering app screenshot'></img>
          <img className='app-screen-4' src={img7} alt='plant watering app screenshot'></img>
        </div>

        <img className='down-arrow' src={downArrow} alt='downward-pointing arrow'></img>

        <img className='full-img' src={img8} alt='hierarchical tree chart'></img>

        <h3 className='case-section-font'>How might we differentiate between watered and unwatered plants?</h3>
        <p className='case-font'>I had a couples ideas on how to denote a plant that needs water from a plant that’s not ready to be watered yet. I looked at how apps apply different states to selected and deselected items. I also considered symbols as a way to differentiate.</p>

        <div className='paper-img-container'>
        <img className='paper-img' src={img9} alt='paper prototype for user interface'></img>
        <img className='paper-img' src={img10} alt='paper prototype for user interface'></img>
        <img className='paper-img' src={img11} alt='paper prototype for user interface'></img>
        <img className='paper-img' src={img12} alt='paper prototype for user interface'></img>
        <img className='paper-img' src={img13} alt='paper prototype for user interface'></img>
        <img className='paper-img' src={img14} alt='paper prototype for user interface'></img>
        <img className='paper-img' src={img15} alt='paper prototype for user interface'></img>
        </div>

        <h3 className='case-section-font'>Tracking watering</h3>
        <p className='case-font'>Because indoor plant care is individual to each plants, users need to be able to see water history and set watering frequencies for them.</p>

        <img className='app-screen-2' src={img16} alt='paper prototype for user interface'></img>

        <p className='case-font'>In an earlier exploration, I used filters denoting dehydrated plants from the rest. In this version, tapping on the plant would make the filter go away and it would hence be marked watered.</p>

        <img className='app-screen-2' src={img17} alt='paper prototype for user interface'></img>

        <h3 className='case-section-font'>Final solution</h3>
        <p className='case-font'>I thought if a water droplet could signify dehydration, then perhaps you could tap that plant and mark it watered. But this is where I needed to get grounded with the goal of my users: they need to see all the plants that are dehydrated at once.</p>

        <div className='paper-img-container'>
        <img className='app-screen-3' src={img18} alt='paper prototype for user interface'></img>
        <img className='app-screen-3' src={img19} alt='paper prototype for user interface'></img>
        <img className='app-screen-3' src={img20} alt='paper prototype for user interface'></img>
        </div>

        <h3 className='case-section-font'>Prototype</h3>
      </div>
    )
}
  
  export default Activity;