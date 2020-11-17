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

        <p>DURATION</p>
        <p>6 weeks</p>
        <p>CROSSFUNCTIONAL TEAM</p>
        <p>Front-end developers, back-end developers, project lead and UX</p>

        <p>Problem</p>
        <p>Building a schedule around ensuring that all your plants are watered is actually pretty difficult. Water my Plants helps to solve those problems by providing an easy to use interface for creating a plant watering schedule that will remind users to water their plants on a regular basis.</p>

        <p>Solution overview</p>
        {/* <div>
          <img></img>
          <img></img>
        </div> */}

        <p>How might we help planters remember to water their plants?</p>
        <p>The problem is pretty broad. I thought maybe everybody needed watering reminder. But my mother who is an avid gardner seemed to not need any help remembering to water. So I asked:</p>
        <ol>
          <li>who needs reminder to water their plants?</li>
          <li>what are they using now to remember to water?</li>
          <li>what factors are contributing to their plants growth or deterioration?</li>
        </ol>

        <p>Key takeaways</p>
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
      </div>
    )
}
  
  export default Plants;