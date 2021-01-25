import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SideBarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
         <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>     
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='login' onClick={toggle}
                onClick={() => window.location = '/login'} >Login</SidebarLink>
                <SidebarLink to='list' onClick={toggle}
               >Lists</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
        </SidebarContainer>  
        </>
    )
}

export default Sidebar
