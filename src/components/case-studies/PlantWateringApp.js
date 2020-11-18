import React from 'react'
import img1 from '../../img/case-study/plants/1.png'
import img2 from '../../img/case-study/plants/2.png'
import img3 from '../../img/case-study/plants/3.jpg'
import img4 from '../../img/case-study/plants/4.jpg'
import img5 from '../../img/case-study/plants/5.png'
import img6 from '../../img/case-study/plants/6.png'
import img7 from '../../img/case-study/plants/7.png'
import img8 from '../../img/case-study/plants/8.png'
import img9 from '../../img/case-study/plants/9.jpg'
import img10 from '../../img/case-study/plants/10.jpg'
import img11 from '../../img/case-study/plants/11.jpg'
import img12 from '../../img/case-study/plants/12.jpg'
import img13 from '../../img/case-study/plants/13.jpg'
import img14 from '../../img/case-study/plants/14.jpg'
import img15 from '../../img/case-study/plants/15.jpg'
import img16 from '../../img/case-study/plants/16.png'
import img17 from '../../img/case-study/plants/17.png'
import img18 from '../../img/case-study/plants/18.png'
import img19 from '../../img/case-study/plants/19.png'
import img20 from '../../img/case-study/plants/20.png'
import downArrow from '../../img/case-study/down-arrow.png'
import '../../styles/case-studies.css';

function Plants() {
    return (
      <div className='case-studies'>
        <h2 id='app-title'>Plant watering app</h2>

        <p className='case-font'>Designed to organize, track, and record plant watering with an emphasis on the wellbeing of indoor plants.</p>
        <p className='case-font-gray'>DURATION</p>
        <p className='darker-text'>6 weeks</p>
        <p className='case-font-gray'>CROSSFUNCTIONAL TEAM</p>
        <p className='darker-text'>Front-end developers, back-end developers, project lead and UX</p>

        <h3 className='case-section-font'>Problem</h3>
        <p className='case-font'>Building a schedule around ensuring that all your plants are watered is actually pretty difficult. Water my Plants helps to solve those problems by providing an easy to use interface for creating a plant watering schedule that will remind users to water their plants on a regular basis.</p>

        <p className='case-section-font'>Solution overview</p>
        <div className='app-screen-container'>
          <img className='app-screen' src={img1} alt='plant watering app screenshot'></img>
          <img className='app-screen' src={img2} alt='plant watering app screenshot'></img>
        </div>

        <section className='blue-section'>
          <h3 className='case-section-font'>How might we help planters remember to water their plants?</h3>
          <p className='case-font'>The problem is pretty broad. I thought maybe everybody needed watering reminder. But my mother who is an avid gardner seemed to not need any help remembering to water. So I asked:</p>
          <ol className='alpha-list'>
            <li className='bold'>who needs reminder to water their plants?</li>
            <li className='bold'>what are they using now to remember to water?</li>
            <li className='bold'>what factors are contributing to their plants growth or deterioration?</li>
          </ol>
        </section>

        <h3 className='case-section-font'>Key takeaways</h3>
        <p className='case-font'>I spoke with four planters and my mother about their gardening needs, goals, and blockers. Here are my key takeaways:</p>
        <img className='full-img' src={img3} alt='application design notes'></img>
        <ol className='alpha-list'>
          <li>Gardeners and those with large backyards tend not to need help with remembering to water.</li>
          <li>Most outdoor plants are easily taken care of with rain and missing water a few days does not harm them.</li>
          <li className='bold'>Planters however, who do not have a large backyard or live indoor in small spaces have drastically different struggles-</li>
        </ol>

        <img className='down-arrow' src={downArrow} alt='downward-pointing arrow'></img>

        <ul className='blue-list'>
          <li>It’s hard to keep up with which plants have been watered, which haven’t and their individual watering needs.</li>
          <li>It’s hard to identify plants when you have a lot of them at home.</li>
          <li>It’s challenging to remember the varying needs of each plant because house plants tend to have particular care instructions.</li>
        </ul>

        <h3 className='case-section-font'>Creating empathy</h3>
        <p className='case-font'>Because I’m not the one experiencing these challanges, I needed to empathize with the planters who do. I defined the typical planter who needs a solution to these challenges.</p>

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
  
  export default Plants;