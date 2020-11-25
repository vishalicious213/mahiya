import React from 'react'
import img1 from '../../img/thoughts/subscribe/1.jpg'
import img2 from '../../img/thoughts/subscribe/2.jpg'
import img3 from '../../img/thoughts/subscribe/3.jpg'
import img4 from '../../img/thoughts/subscribe/4.jpg'
import img5 from '../../img/thoughts/subscribe/5.jpg'
import img6 from '../../img/thoughts/subscribe/6.jpg'
import img7 from '../../img/thoughts/subscribe/7.jpg'
import '../../styles/thoughts.css'

function Subscribe() {
    return (
        <div id='thoughts-2'>
            <h1 id='thought-heading'>App critique- Amazon’s Subscribe and Save</h1>
            <p className='thought-text-2'>I purchase a ton of supplements from amazon regularly every month. I’m pretty familiar with their subscribe and save program. However, as someone who gets these items regularly, I cannot use the program for its intended purpose, which is to save you time and money by automating the process.</p>
            <p className='thought-text-2'>This is an analysis of what subscribe and save currently does and what I think it could do to accomplish my goals.</p>

            <div>
                <div id='center'>
                    <p className='thought-text-2'>&#8226; &#8226; &#8226;</p>
                </div>
                <h3 className='thought-title-2'>Does not relay the information I need causing confusion.</h3>
                <p className='thought-text-2'>Currently, I can go to any item that allows me to subscribe, purchase it one time or setup subscribe & save. However, I have never set up the subscribe & save from the beginning of its flow. It <b>auto-generates a date in the future</b>, which is <b>unchangeable</b>, and only recently I noticed a <b>“get it sooner” link</b> which adds it to the cart.</p>
                <div className='thought-image-100'>
                    <img className='thought-image' src={img1} alt='activity tracker app screenshot'></img>
                </div>
                <p>When I click the “change” link, my expectation is that I can change the date. It was only during my analysis for this article, I realized it simply tells you that by ordering now you won’t get a discount.</p>
                <p className='thought-text-2'>I never even saw that they give you the option between getting now and getting no discount or getting later and getting a discount. I always add the item to the cart first and then from inside the cart, I subscribe to get the discount. But I only ever saw the minimum discount sometimes, never really thought much about it.</p>
            </div>

            <h3 className='thought-title-2'>Can’t tell that an item is not in stock and limited options for its replacement.</h3>
            <p className='thought-text-2'>Initially, I didn’t understand why some items didn’t have the “need this item now” button. Only recently during my research, I noticed it’s because the item was not in stock but this also isn’t stated anywhere on the sub’d item.</p>
            <p className='thought-text-2'>When an item is out of stock, it shows the option to switch to a different product. Only issue is Amazon picks the product rather than letting me see the various items sold by different sellers. I think currently this item suggestion is generated using some categorization such as the same seller or the top-rated item but this context also isn’t provided.</p>
            <div className='thought-image-50'>
                <img className='thought-image' src={img2} alt='activity tracker app screenshot'></img>
            </div>
            <p>no way to tell why the item on the left cannot be ordered now</p>

            <h3 className='thought-title-2'>Giving the impression that if you sub an item over, you’ll get a discount.</h3>
            <p className='thought-text-2'>When I go into the item description for an item I have already subscribed to, I’m prompted to create a new subscription to get the minimum discount. So I have multiple subscriptions for one item. This item had already unlocked its max discount but if I order right now, I only get the minimum discount. This information is not easily relayed anywhere.</p>
            <div className='thought-image-100'>
                <img className='thought-image' src={img3} alt='activity tracker app screenshot'></img>
            </div>

            <h3 className='thought-title-2'>Can’t find specific items among sub’d items.</h3>
            <div className='thought-image-50'>
                <img className='thought-image' src={img4} alt='activity tracker app screenshot'></img>
            </div>
            <p>There’s also currently no way to look up sub’d items within subscribe & save</p>

            <h3 className='thought-title-2'>Active subscription seems like it can expand, but it doesn’t.</h3>
            <p className='thought-text-2'>The active subscriptions could be a toggle or a dropdown menu or even expand within each section between active and inactive subs. Currently “active subscriptions” take you to a separate page where you select between active or inactive subscriptions.</p>
            <p className='thought-text-2'>I personally don’t see any use of having inactive subscriptions because there’s no difference between a product I haven’t sub’d yet and a product I stopped subbing to. So this is useless to me. If I wanted to look for something previously purchased, then I would look through order history.</p>
            <p className='thought-text-2'>There is also an “add new subscriptions” flow within the subscriptions page but I could not use it because I can’t look up items, and I’m limited to only the suggestions given to me.</p>
            <div className='thought-image-100'>
                <img className='thought-image' src={img5} alt='activity tracker app screenshot'></img>
            </div>

            <p className='thought-text-2'>The lengthy names of items could also be shortened to only show the first line maybe. They’re adding to the pain of scrolling and usually, the first line tells me what it is I need.</p>
            <p className='thought-text-2'>I also wish I could look up specific subscriptions here because I have a lot of supplements that I get every month.</p>
            <p className='thought-text-2'>The deliveries page is a nightmare and requires a lot of focus, remembering, and scrolling.</p>
            <div className='thought-image-100'>
                <img className='thought-image' src={img6} alt='activity tracker app screenshot'></img>
            </div>

            <p className='thought-text-2'>I always shy away from entering this deliveries page because it’s scary how much mental efforts it requires from me. I come here to look up specific items but this page is prioritized instead of the list of subscriptions. The result is, I often forget what I’m even there to do.</p>
            <div className='thought-image-100'>
                <img className='thought-image' src={img7} alt='activity tracker app screenshot'></img>
            </div>
            <p className='thought-text-2'>Lots of type hierarchies, your eyes are guided to information that you’re not looking for and as a result now you need to recall your initial goal. It’s painful.</p>

            <div id='center'>
                <p className='thought-text-2'>&#8226; &#8226; &#8226;</p>
            </div>

            <h3 className='thought-title-2'>Final thoughts</h3>
            <p className='thought-text-2'>During the writing of this article, I forced myself to really walk through the subscribe & save program. I now think this program was designed to create quick subscriptions rather than intentional ones. For example, because I order a lot of homeopathic remedies that aren’t often FDA approved, I have to research their ingredients, side-effects, reviews etc. I simply cannot impulsively subscribe to any natural remedies. So the program although saves me money, it doesn’t save me time.</p>
            <p className='thought-text-2'>However, maybe there are items that you could quickly subscribe to without going to the item information. I see that within it, it offers everything the Amazon product lists offer, yet fails to answer subscription related questions in a timely manner. It almost gives the impression that the main goal maybe was to obscure what I’m subscribed to; but I understand this may have been an unintentional result. </p>
        </div>
    )
}

export default Subscribe