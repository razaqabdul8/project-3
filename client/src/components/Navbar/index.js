import React, { useState, useEffect } from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
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
                <NavLogo>Marcy</NavLogo>
                <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                <NavMenu>
                    <NavLinks  onClick={() => window.location = '/lists'} to='lists' smooth={true} duration={500} spy={true} exact='true' offset={-80}><GiShoppingCart /></NavLinks>
                    <NavLinks  onClick={() => window.location = '/User'} to='User' smooth={true} duration={500} spy={true} exact='true' offset={-80}><MdPersonOutline /></NavLinks>
                </NavMenu>
                </NavbarContainer>
            </NavBar>
        </div>
    )
}

export default Nav
