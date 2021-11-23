import React from "react"

import { ThemeProvider } from "styled-components"
import {
  Nav,
  NavLogo,
  NavLogoContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavMenuContainer,
  IconContainer,
  CircleContainer,
  Circle,
  Bars,
} from "./NavbarElements.css"

import { BsSearch } from "react-icons/bs"
import { menuDataGrey, menuDataBlue } from "../../data/MenuData"
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogoContainer>
          <NavLogo to="/">Blog template</NavLogo>
        </NavLogoContainer>
        <IconContainer>
          <BsSearch />
        </IconContainer>
        <NavMenuContainer>
          <NavMenu>
            {menuDataGrey.map(item => (
              <NavItem>
                <NavLinks to={item.link}>{item.title}</NavLinks>
              </NavItem>
            ))}
          </NavMenu>
          <Bars />
          <ThemeProvider theme={{ color: "#1A54E7" }}>
            <NavMenu>
              {menuDataBlue.map(item => (
                <NavItem>
                  <NavLinks to={item.link}>{item.title}</NavLinks>
                </NavItem>
              ))}
              <CircleContainer>
                <Circle />
                <Circle />
                <Circle />
              </CircleContainer>
            </NavMenu>
          </ThemeProvider>
        </NavMenuContainer>
      </Nav>
    </>
  )
}

export default Navbar
