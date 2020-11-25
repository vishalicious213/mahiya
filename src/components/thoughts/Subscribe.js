import React from 'react'
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
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>When I click the “change” link, my expectation is that I can change the date. It was only during my analysis for this article, I realized it simply tells you that by ordering now you won’t get a discount.</p>
                <p className='thought-text-2'>I never even saw that they give you the option between getting now and getting no discount or getting later and getting a discount. I always add the item to the cart first and then from inside the cart, I subscribe to get the discount. But I only ever saw the minimum discount sometimes, never really thought much about it.</p>
            </div>

            <h3 className='thought-title-2'>Can’t tell that an item is not in stock and limited options for its replacement.</h3>
            <p className='thought-text-2'>Initially, I didn’t understand why some items didn’t have the “need this item now” button. Only recently during my research, I noticed it’s because the item was not in stock but this also isn’t stated anywhere on the sub’d item.</p>
            <p className='thought-text-2'>When an item is out of stock, it shows the option to switch to a different product. Only issue is Amazon picks the product rather than letting me see the various items sold by different sellers. I think currently this item suggestion is generated using some categorization such as the same seller or the top-rated item but this context also isn’t provided.</p>
            {/* <img></img> */}
            <p>no way to tell why the item on the left cannot be ordered now</p>

            <h3 className='thought-title-2'>Giving the impression that if you sub an item over, you’ll get a discount.</h3>
            <p className='thought-text-2'>When I go into the item description for an item I have already subscribed to, I’m prompted to create a new subscription to get the minimum discount. So I have multiple subscriptions for one item. This item had already unlocked its max discount but if I order right now, I only get the minimum discount. This information is not easily relayed anywhere.</p>
            {/* <img></img> */}

            <h3 className='thought-title-2'>Can’t find specific items among sub’d items.</h3>
            {/* <img></img> */}
            <p>There’s also currently no way to look up sub’d items within subscribe & save</p>

            <h3 className='thought-title-2'>Active subscription seems like it can expand, but it doesn’t.</h3>
            <p className='thought-text-2'>The active subscriptions could be a toggle or a dropdown menu or even expand within each section between active and inactive subs. Currently “active subscriptions” take you to a separate page where you select between active or inactive subscriptions.</p>
            <p className='thought-text-2'>I personally don’t see any use of having inactive subscriptions because there’s no difference between a product I haven’t sub’d yet and a product I stopped subbing to. So this is useless to me. If I wanted to look for something previously purchased, then I would look through order history.</p>
            <p className='thought-text-2'>There is also an “add new subscriptions” flow within the subscriptions page but I could not use it because I can’t look up items, and I’m limited to only the suggestions given to me.</p>
            {/* <img></img> */}


            <h3 className='thought-title-2'>Final thoughts</h3>
            <p className='thought-text-2'>Using this data, we would then design a solution where you could choose the things you want in a pair, rather than randomly selecting anything that looks good on your computer screen. I could pick the scrunches that also come with a v-cut front or pick a pair of v-cuts that are not high rise. Possibilities are endless. In this way we could buy the kinds of leggings that make us feel like a million bucks.</p>
        </div>
    )
}

export default Subscribe