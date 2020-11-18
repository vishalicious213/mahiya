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

        <p className='case-font'>Coming up with the inventory flow has not been easy. At first I was under the impression that you could leave food outside the containers. But I later realized that the whole idea behind this app is to save you money and food but that won’t happen if we’re unorganized from the beginning.  If I encourage users to not have to add food into their individual categories then I’m creating more work for them in the future.</p>

        <div>
          <div><img className='app-screen' src={img2} alt='activity tracker app screenshot'></img></div>
          <div>
            <div><img className='app-screen' src={img2} alt='activity tracker app screenshot'></img></div>
            <p className='case-font'>So I grounded myself to the goal of this app which really is to get organized around the food I already have. By tracking what I have, I will spend less money at the grocery store.</p>
          </div>
        </div>

        <div className='app-screen-container'>
          <img className='app-screen' src={img1} alt='activity tracker app screenshot'></img>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
          <img className='app-screen' src={img2} alt='activity tracker app screenshot'></img>
        </div>

        <h3 className='case-section-font'>The meal plan</h3>
        <p className='case-font'>Now that I’m aware what food I have, I need an idea of what to cook. The goal behind the problem is automating the whole process of meal planning, from taking inventory to figuring out what I’ll be eating to what I need to get from the store. The idea is to save time, money, and food.</p>
        <p className='case-font'>So while thinking through the meal plan flow, it made sense to automatically generate a meal plan based on user preferences and in-stock items. But because this requires a professional cook to create this feature, I decided to include a meal suggestion instead.</p>

        <h3 className='case-section-font'>How might we add meals?</h3>
        <p className='case-font'>The three main ways a user is able to add meals is through the app’s suggestions, through their own cookbook, which is a collection of their own recipes, and import from an outside resource.</p>
        <p className='case-font'>Finally, user needs to be able to delete anything that was added recently or otherwise change up anything that was done.</p>

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