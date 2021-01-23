import React, { useState, useEffect } from 'react'
import { BiHomeHeart } from 'react-icons/bi';
import { GiShoppingCart } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { RiChat1Line } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';
import { NavBar, NavbarContainer, NavLogo, NavLinks, NavMenu, MobileIcon } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Nav = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <div>
            <NavBar >
          
                <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Marcy</NavLogo>
                <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                <NavMenu>
                    <NavLinks to='/'><BiHomeHeart /></NavLinks>
                    <NavLinks to='/items'><GiShoppingCart /></NavLinks>
                    <NavLinks  onClick={() => window.location = '/login'} to='login' smooth={true} duration={500} spy={true} exact='true' offset={-80}><MdPersonOutline /></NavLinks>
                    <NavLinks to='/contact'><RiChat1Line /></NavLinks>
                      
                </NavMenu>
                </NavbarContainer>
            </NavBar>
        </div>
    )
}

export default Nav
