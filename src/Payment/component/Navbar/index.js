import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const NavBar = ({ toggle }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">dolla</NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">Customer</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Landlord</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">FAQs</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default NavBar;
