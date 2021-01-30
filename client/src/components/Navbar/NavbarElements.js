import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const NavBar = styled.nav`
    background: #8c92ac;
    heigth: 80px;
    display: flex;
    justify-content: flex-end;
    position: sticky;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: flex-end;
height: 80px;
padding: 0 24px;
max-width: 1100px;
justify-self: flex-start;
`

export const NavLogo = styled(LinkRouter)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
margin-left: 24px;
// font-weight: bold;
text-decoration: none;
margin-top: 24px;
margin-right: 1100px;

&:hover{
    color: 	rgb(255, 235, 245);
    transition: 0.2s ease-in-out;
    text-decoration: none;
}

@media screen and (max-width: 480px) {
    display: none;
}
@media screen and (max-width: 728px) {
    margin-right: 120px;
}
// @media screen and (max-width: 1200px) {
//     margin-right: 1080px;
// }
// @media screen and (max-width: 2200px) {
//     margin-right: 1600px;
// }
`;

export const NavLinks = styled(LinkScroll)`
justify-content: flex-end;
color: #f9f3f6;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 14px;
height: 100%;
cursor: pointer;
font-size: 2rem;

&.active {
    border-bottom: 3px solid rgb(255,0,127);
}

&:hover{
    color: rgb(	255, 235, 245);
    transition: 0.2s ease-in-out;
    text-decoration: none;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
life-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display: none;
}`;

export const NavItem = styled.li`
height: 80px`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
`;