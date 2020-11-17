import React from 'react'
// import plant1 from '../img/plant-watering-app1.png'
// import plant2 from '../img/plant-watering-app2.png'
// import activity1 from '../img/activity-tracker-app1.png'
// import activity2 from '../img/activity-tracker-app2.png'
// import meal1 from '../img/mealventory-app1.png'
// import meal2 from '../img/mealventory-app2.png'
import '../../styles/case-studies.css';

function Plants() {
    return (
      <div id='case-studies'>
        <h2 id='app-title'>Plant watering app</h2>

        <p className='case-font-gray'>DURATION</p>
        <p>6 weeks</p>
        <p className='case-font-gray'>CROSSFUNCTIONAL TEAM</p>
        <p>Front-end developers, back-end developers, project lead and UX</p>

        <h3 className='case-section-font'>Problem</h3>
        <p>Building a schedule around ensuring that all your plants are watered is actually pretty difficult. Water my Plants helps to solve those problems by providing an easy to use interface for creating a plant watering schedule that will remind users to water their plants on a regular basis.</p>

        <p className='case-section-font'>Solution overview</p>
        {/* <div>
          <img></img>
          <img></img>
        </div> */}

        <h3 className='case-section-font'>How might we help planters remember to water their plants?</h3>
        <p>The problem is pretty broad. I thought maybe everybody needed watering reminder. But my mother who is an avid gardner seemed to not need any help remembering to water. So I asked:</p>
        <ol>
          <li>who needs reminder to water their plants?</li>
          <li>what are they using now to remember to water?</li>
          <li>what factors are contributing to their plants growth or deterioration?</li>
        </ol>

        <h3 className='case-section-font'>Key takeaways</h3>
        <p>I spoke with four planters and my mother about their gardening needs, goals, and blockers. Here are my key takeaways:</p>
        {/* <img></img> */}
        <ol>
          <li>Gardeners and those with large backyards tend not to need help with remembering to water.</li>
          <li>Most outdoor plants are easily taken care of with rain and missing water a few days does not harm them.</li>
          <li>Planters however, who do not have a large backyard or live indoor in small spaces have drastically different struggles-</li>
        </ol>

        {/* <img>arrow</img> */}

        <ul>
          <li>It’s hard to keep up with which plants have been watered, which haven’t and their individual watering needs.</li>
          <li>It’s hard to identify plants when you have a lot of them at home.</li>
          <li>It’s challenging to remember the varying needs of each plant because house plants tend to have particular care instructions.</li>
        </ul>

        <h3 className='case-section-font'>Creating empathy</h3>
        <p>Because I’m not the one experiencing these challanges, I needed to empathize with the planters who do. I defined the typical planter who needs a solution to these challenges.</p>

        <h3 className='case-section-font'>The Feng Shui Enthusiast</h3>
        <div>
          <p>Loves adopting plants, but can’t get them organized to save her life. Her partner thinks she owns too many plants for their small apartment. She feels frustrated because often these plants have different needs and not many ways to tell them apart.</p>
          {/* <img></img> */}
        </div>
        <p>I put myself in her shoes and stopped at every point in her journey to understand her needs, goals, and frustrations.</p>

        {/* <img>chart</img> */}

        <h3 className='case-section-font'>Information Architecture</h3>
        <p>Using my new found growth, I was ready to create the userflow using some predetermined tasks.</p>
        {/* <div>
          <img></img>
          <img></img>
        </div> */}

        {/* <img>arrow</img> */}

        {/* <img>tree diagram</img> */}

        <h3 className='case-section-font'>How might we differentiate between watered and unwatered plants?</h3>
        <p>I had a couples ideas on how to denote a plant that needs water from a plant that’s not ready to be watered yet. I looked at how apps apply different states to selected and deselected items. I also considered symbols as a way to differentiate.</p>

        {/* <div>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
          <img></img>
        </div> */}

        <h3 className='case-section-font'>Tracking watering</h3>
        <p>Because indoor plant care is individual to each plants, users need to be able to see water history and set watering frequencies for them.</p>

        {/* <img></img> */}

        <p>In an earlier exploration, I used filters denoting dehydrated plants from the rest. In this version, tapping on the plant would make the filter go away and it would hence be marked watered.</p>

        {/* <img></img> */}

        <h3 className='case-section-font'>Final solution</h3>
        <p>I thought if a water droplet could signify dehydration, then perhaps you could tap that plant and mark it watered. But this is where I needed to get grounded with the goal of my users: they need to see all the plants that are dehydrated at once.</p>

        {/* <div>
          <img></img>
          <img></img>
          <img></img>
        </div> */}

        <h3 className='case-section-font'>Prototype</h3>
      </div>
    )
}
  
  export default Plants;