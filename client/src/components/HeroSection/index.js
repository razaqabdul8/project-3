import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroLink, ArrowForward, ArrowRight, HeroBtnWrapper, } from './HeroElements';
import Video from '../../video/video.mp4';
import {Button} from '../ButtonElements'

const HeroSection  = (props) => {
const [hover, setHover] = useState(false);
const onHover = () => {
    setHover(!hover)
}
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/pm4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Marcy Marketplace </HeroH1>
                <HeroP>
               Let's get personal
                </HeroP>
                <HeroBtnWrapper>
                <Button onClick={() => window.location = '/signup'} onMouseEnter={onHover} primary='true'
                    dark='true' to='/signup'>
                        Sign Up {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    <HeroLink onClick={() => window.location = '/login'} to='/login' nMouseEnter={onHover} primary='true'
                    dark='true'> Login {hover ? <ArrowForward /> : <ArrowRight />} </HeroLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;