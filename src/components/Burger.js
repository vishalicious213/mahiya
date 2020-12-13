import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import burgerIcon from '../img/burger.svg'
import cancelIcon from '../img/cancel.svg'
import Resume from '../resources/Mahiya-Hoque.pdf'
import '../styles/burger.css';

function Burger() {
    const [menuOpen, setMenuOpen] = useState(false)

    const MenuButton = () => {
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

    const BurgerMenu = () => {
        if (menuOpen === true) {
            return (
                <section id='burger-menu'>
                    <Link className='burger-menu-item' onClick={event => setMenuOpen(!menuOpen)} to='/'>work</Link>
                    <Link className='burger-menu-item' onClick={event => setMenuOpen(!menuOpen)} to='/about-me'>about me</Link>
                    <Link className='burger-menu-item' onClick={event => setMenuOpen(!menuOpen)} to='/thoughts'>my thoughts</Link>
                    <Link className='burger-menu-item' onClick={event => setMenuOpen(!menuOpen)} to='/exercises'>design exercises</Link>
                    <a className='burger-menu-item' onClick={event => setMenuOpen(!menuOpen)} href={Resume} target="_blank" rel="noopener noreferrer">resume</a>
                </section>
            )
        } else
            return null
    }

    return (
        <div id='burger'>
            <MenuButton />
            <BurgerMenu />
        </div>
    )
}

export default Burger;