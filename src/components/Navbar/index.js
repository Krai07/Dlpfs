import React from 'react';
import{FaBars} from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar= ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to='/'> DLPFS</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to= "Home">Home</NavLinks>
                    </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin" > Signin </NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
