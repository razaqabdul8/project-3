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
                <HeroH1> Mercy online store </HeroH1>
                <HeroP>
               Let's get personal
                </HeroP>
                <HeroBtnWrapper>
                {/* <a href="/login"  >     */}
                <Button onClick={() => window.location = '/login'} onMouseEnter={onHover} primary='true'
                    dark='true' to='/login'>
                        Login {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    {/* </a> */}
                    <HeroLink> or create account</HeroLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;