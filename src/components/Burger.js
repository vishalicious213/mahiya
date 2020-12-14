import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import burgerIcon from '../img/burger.svg'
import cancelIcon from '../img/cancel.svg'
import Resume from '../resources/Mahiya-Hoque.pdf'
import '../styles/burger.css';

function Burger() {
    const pathname = window.location.pathname
    const [menuOpen, setMenuOpen] = useState(false)
    const [itemPath, setItemPath] = useState(pathname)

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

    const MenuItem = (props) => {
        return (
            <p className={`${props.itemPath===itemPath ? 'activeMenu' : 'inactiveMenu'}`}>{props.name}</p>
        )
    }

    const BurgerMenu = () => {
        if (menuOpen === true) {
            return (
                <section id='burger-menu'>
                    <Link className='burger-menu-item' onClick={event => {setMenuOpen(!menuOpen); setItemPath('/')}} to='/'>
                        <MenuItem name='work' itemPath='/' />
                    </Link>

                    <Link className='burger-menu-item' onClick={event => {setMenuOpen(!menuOpen); setItemPath('/about-me')}} to='/about-me'>
                        <MenuItem name='about me' itemPath='/about-me' />
                    </Link>

                    <Link className='burger-menu-item' onClick={event => {setMenuOpen(!menuOpen); setItemPath('/thoughts')}} to='/thoughts'>
                        <MenuItem name='my thoughts' itemPath='/thoughts' />
                    </Link>

                    <Link className='burger-menu-item' onClick={event => {setMenuOpen(!menuOpen); setItemPath('/exercises')}} to='/exercises'>
                        <MenuItem name='design exercises' itemPath='/exercises' />
                    </Link>

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