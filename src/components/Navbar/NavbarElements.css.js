import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
`
export const NavLogoContainer = styled.div`
  flex: 1 2 580px;
  background: #1a54e7;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: white;
  padding: 0 34px;
`
export const NavLogo = styled(Link)`
  color: #141414;
  justify-content: flex-end;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  padding: 0 34px;
`
export const NavMenuContainer = styled.div`
  flex: 2 1 1420px;
  background: #fff;
  display: flex;
  align-items: center;

  ul:first-child {
    margin-right: 132px;
  }
  @media (max-width: 1290px) {
    flex-direction: column;
    align-items: flex-start;

    ul:first-child {
      margin-right: 0;
    }

    ul:last-child {
      display: none;
    }
  }
  @media (max-width: 650px) {
    ul:first-child {
      display: none;
    }
  }
`
export const NavMenu = styled.ul`
  list-style: none;
  height: 100%;
  display: inline-flex;
`
export const NavItem = styled.li`
  flex: 2 1 120px;
  height: 100%;
`
export const NavLinks = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => (theme.color ? theme.color : "#B2B2B2")};
  height: 100%;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid white;
  padding-bottom: 3px;
  font-size: 18px;
  &:hover {
    border-bottom: 3px solid;
    padding-bottom: 1px;
  }
`
export const IconContainer = styled.div`
  background-color: #f6f6f6;
  padding: 18px;
  display: flex;
  align-items: center;
`
export const CircleContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 34px;
`
export const Circle = styled.span`
  width: 5px;
  height: 5px;
  margin: 3px;
  background: ${({ theme }) => theme.color};
  border-radius: 20px;
`

export const Bars = styled(FaBars)`
  display: none;
  color: black;

  @media screen and (max-width: 1290px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8em;
    cursor: pointer;
  }
`
