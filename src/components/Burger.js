import React from 'react'
import burgerIcon from '../img/burger.svg'
import '../styles/burger.css';

function Burger() {
    return (
        <div id='burger'>
            <img id='burger-icon' src={burgerIcon} alt='burger menu'></img>
            {/* <div>work</div>
            <div>about me</div>
            <div>my thoughts</div>
            <div>design exercises</div>
            <div>resume</div> */}
        </div>
    )
}

export default Burger;