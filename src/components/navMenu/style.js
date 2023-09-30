import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const MainNav = styled.div`
width: 244px;
background-color: #181818;
padding: 20px 0 20px 36px;
`

export const NavBurger = styled.div`
width: 20px;
height: 36px;
padding: 13px 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const BurgerLine = styled.span`
display: inline-block;
width: 100%;
height: 1px;
background-color: #d3d3d3;
`

export const NavMenu = styled.div`
display: block;
visibility: visible;
`

export const MenuList = styled.ul`
padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
padding: 5px 0;
margin-bottom: 16px;
`

export const Menulink = styled(NavLink)`
color: #ffffff;
font-weight: 400;
font-size: 16px;
line-height: 24px;
`