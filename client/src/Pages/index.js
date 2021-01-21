import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Sidebar from '../components/SideBar'

const Home = () => {
    const[ isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
          
        </div>
    )
}
export default Home;
