import React, { useState } from 'react'
import burgerIcon from '../img/burger.svg'
import cancelIcon from '../img/cancel.svg'
import '../styles/burger.css';

function Burger() {
    const [menuOpen, setMenuOpen] = useState(false)

    const MenuButton = (props) => {
        if (menuOpen === true) {
            return (
                <div>
                    <img
                        id='burger-icon' 
                        src={cancelIcon} 
                        alt='burger menu'
                        onClick={event => setMenuOpen(!menuOpen)}
                    />
                </div>
                // <section>
                //     <div>work</div>
                //     <div>about me</div>
                //     <div>my thoughts</div>
                //     <div>design exercises</div>
                //     <div>resume</div>
                // </section>
            )
        } else
            return (
                <div>
                    <img
                        id='burger-icon' 
                        src={burgerIcon} 
                        alt='burger menu'
                        onClick={event => setMenuOpen(!menuOpen)}
                    />
                </div>
            )
    }


    return (
        <div id='burger'>
            <MenuButton />

        </div>
    )
}

export default Burger;