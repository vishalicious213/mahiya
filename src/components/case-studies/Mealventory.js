import React, { useEffect } from 'react'
import img1 from '../../img/case-study/meal/1.jpg'
import img2 from '../../img/case-study/meal/2.jpg'
import img3 from '../../img/case-study/meal/3.jpg'
import img4 from '../../img/case-study/meal/4.jpg'
import img5 from '../../img/case-study/meal/5.jpg'
import img6 from '../../img/case-study/meal/6.jpg'
import img7 from '../../img/case-study/meal/7.jpg'
import img8 from '../../img/case-study/meal/8.jpg'
import img9 from '../../img/case-study/meal/9.jpg'
import img10 from '../../img/case-study/meal/10.jpg'
import img11 from '../../img/case-study/meal/11.jpg'
import img12 from '../../img/case-study/meal/12.jpg'
import '../../styles/case-studies.css';

function Meal() {
    useEffect(() => {
      window.scrollTo(0, 0)
    });

    return (
      <div className='case-studies'>
        <h2 className='app-title' id='app-title-3'>Mealventory app</h2>

        <p className='case-font'>Designed to eliminate food waste and save money meal-planning.</p>

        <h3 className='case-section-font'>Problem</h3>
        <p className='case-font'>Inventorying grocery is a daunting task. The process requires throwing away bad food, figuring out what to do with the food that’s still good, coming up with a meal plan and making a grocery list.</p>

        <p className='case-section-font'>Solution overview</p>
        <div className='app-screen-container'>
          <img className='app-screen-5' src={img1} alt='activity tracker app screenshot'></img>
          <img className='app-screen-5' src={img2} alt='activity tracker app screenshot'></img>
          <img className='app-screen-5' src={img3} alt='activity tracker app screenshot'></img>
        </div>

        <h3 className='case-section-font'>Accounting for all the food.</h3>
        <p className='case-font'>One of the things meal planning apps often offer is listing your food into a container, typically it’s called a pantry. But the downside to having only a pantry is if you’re someone with multiple pantries or freezers, you won’t know how to locate your food without additional context.</p>
        
        <h3 className='case-section-font'>So how might we come up with a food organization system for everyone?</h3>
        <p className='case-font'>Initially I thought I was solving for how to organize your food and I thought it would be beneficial to give users the option to organize however they wish. In thinking this way, I considered tags. I thoughts tags are used by some popular apps like airtable as a way of grouping like items.</p>
        <div className='app-screen-container'>
          <img className='app-screen-6' src={img4} alt='activity tracker app screenshot'></img>
          <img className='app-screen-6' src={img5} alt='activity tracker app screenshot'></img>
        </div>

        <div className='app-screen-container text-and-img'>
          <p className='case-font fify-percent'>I considered music apps for their categorization capabilities. Spotify stood out because of its versatile sorting; you’re able to see multiple playlists, recently played songs, and new music suggestions all in one screen.</p>
          <img className='app-screen fifty-percent' src={img6} alt='activity tracker app screenshot'></img>
        </div>

        <p className='case-font'>Coming up with the inventory flow has not been easy. At first I was under the impression that you could leave food outside the containers. But I later realized that the whole idea behind this app is to save you money and food but that won’t happen if we’re unorganized from the beginning.  If I encourage users to not have to add food into their individual categories then I’m creating more work for them in the future.</p>

        <div className='text-and-img'>
          <div className='fifty-percent'><img className='ninety' src={img7} alt='activity tracker app screenshot'></img></div>
          <div className='text-and-img-2 fifty-percent'>
            <div><img className='ninety' src={img8} alt='activity tracker app screenshot'></img></div>
            <p className='case-font ninety'>So I grounded myself to the goal of this app which really is to get organized around the food I already have. By tracking what I have, I will spend less money at the grocery store.</p>
          </div>
        </div>

        <div className='app-screen-container-2'>
          <img className='app-screen-5' src={img9} alt='activity tracker app screenshot'></img>
          <img className='app-screen-5' src={img10} alt='activity tracker app screenshot'></img>
          <img className='app-screen-5' src={img11} alt='activity tracker app screenshot'></img>
        </div>

        <h3 className='case-section-font'>The meal plan</h3>
        <p className='case-font'>Now that I’m aware what food I have, I need an idea of what to cook. The goal behind the problem is automating the whole process of meal planning, from taking inventory to figuring out what I’ll be eating to what I need to get from the store. The idea is to save time, money, and food.</p>
        <p className='case-font'>So while thinking through the meal plan flow, it made sense to automatically generate a meal plan based on user preferences and in-stock items. But because this requires a professional cook to create this feature, I decided to include a meal suggestion instead.</p>

        <h3 className='case-section-font'>How might we add meals?</h3>
        <p className='case-font'>The three main ways a user is able to add meals is through the app’s suggestions, through their own cookbook, which is a collection of their own recipes, and import from an outside resource.</p>
        <p className='case-font'>Finally, user needs to be able to delete anything that was added recently or otherwise change up anything that was done.</p>

        <div className='app-screen-container'>
          <img className='third-img' src={img12} alt='Google Calendar schedule'></img>
        </div>

        <h3 className='case-section-font'>What might we include in the recipe?</h3>
        <p className='case-font'>In thinking about recipes, I considered what things are important for cooking. I took these ideas from popular apps like Yummili and Mealime.</p>
        <p className='case-font'>Yummili displays their calory counts on the recipes along with how long it would take to make a recipe and how many ingredients it has.</p>
        <p className='case-font'>Then it lists all the ingredients, gives you the option to add them to your shopping list, and tells you the servings. And it also schedules a time when you’ll prepare this meal.</p>
        <p className='case-font'>Mealime on the other hand has a slew of options in a popup menu including printing and sharing recipe, nutrition facts etc.</p>
        <p className='case-font'>Mealime also has a tabs function to go from cookware, ingredients, to seeing instructions. It’s quiet less overwhelming than yummily’s that requires scrolling.</p>

        <h3 className='case-section-font'>Choosing color</h3>
        <p className='case-font'>Blue denotes dependability, demands reliability. A lot of banking apps use this color for these reasons. I also noticed tracker apps generally tend to use a shade of blue. And because Mealventory is tracking your food, it aligns perfectly with our goal.</p>
      </div>
    )
}
  
  export default Meal;