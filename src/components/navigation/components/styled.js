/* eslint-disable no-nested-ternary */
// This folder contains the Styled components for the Navigation Component

import Styled from "styled-components";
import { Flex, Box } from "rebass";
import Link from "next/link";
import { LinkBtn as Btn } from "../../shared/buttons";
import ActiveLink from "../../shared/active-link";

// Wrapper container for the Hidden navigation
export const CachetteWrapper = Styled.div`
	transition: all 0.4s ease-in;
	height: ${props => (props.height ? props.height : `8rem`)};
	width: 100%;
	position: fixed;
	top: 0;
    left: 0;
    z-index: 100;
	transform: translate3d(0, ${props =>
    props.isNavVisible ? `0px` : `-${props.height}`}, 0);
`;

// Main Navigation Styles.
export const NavContainer = Styled.div`
    height: ${props => (props.navHeight ? props.navHeight : `8rem`)};
    background-color: #FFFFFF;
    width: 100%;
    box-shadow: 1px 3px 3px rgba(10, 10, 10, 0.02);
    @media screen and (max-width: 960px){
        height: 6rem;
        background-color: ${props =>
          props.theme
            ? props.theme.colorTheme
              ? props.theme.colorTheme.grey
              : "inherit"
            : "inherit"}
    }
`;

export const NavContainerFlex = Styled(Flex)`
    height: 100%;
`;

export const LogoContainerBox = Styled(Box)`
    height: 40%;
    margin-left: 4rem;
    @media screen and (max-width: 960px){
        height: 60%;
    }
`;

export const LogoWrapper = Styled.div`
    width: 100%;
    height: 100%;
    background-color: #E6E6E6;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = Styled.a`
    color: inherit;
    text-decortation: none;
`;

export const StyledNavLink = Styled(ActiveLink)`
    color: inherit;
    text-decoration: none;
`;

export const StyledSubNavLink = Styled(StyledNavLink)` 
    display: inline-flex;
    height: 95%;
    justify-content: center;
    align-items: center;
    font-size: .95rem;
    text-transform: uppercase;
    padding: 0px .5rem;    
`;

export const NavLinksContentContainerBox = Styled(Box)`
    margin-left: 3rem;
    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const NavLinksContainerFlex = Styled(Flex)`
`;

export const NavLinkWrapperBox = Styled(Box)`
    margin-right: 2.5rem;
    a{
        display: block;
        font-size: 1.2rem;
        color: inherit;
    }
    a::after{
        content: "|";
        font-size: .8rem;
        margin-left: 2.5rem;
        display: inline-block;
        transform: translateY(-2px);
        color: rgba(10, 10, 10, 0.45)
    }
    a.last{
        border: none;
    }
    a.last::after{
        content: ""
    }
`;

export const ArrowIconWrapper = Styled(NavLinkWrapperBox)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ArrowIcon = Styled.img`
    width: 5px;
    opacity: 0.45; 
    display: block;
`;

export const RegistrationControlsBox = Styled(Box)`
    margin-left: auto;
    margin-right: 4rem;
    min-width: 6rem;
    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const IconWrapper = Styled.div`
    display: inline-flex;
    margin-right: 1rem;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    padding: .5rem;
    background-color: rgba(100, 100, 100, 0.25);
    img{
        width: 100%;
    }
`;

export const RegisterBtn = Styled(Btn)` 
    font-size: 1.4rem;
    @media screen and (max-width: 960px){
        padding: 0.8rem 0.8rem;
    }
`;

export const LoginBtn = Styled(Btn)`
    display: flex;
    flex-direction: row;
    padding: 0.5rem .8rem;
    align-items: center;
    margin-right: 0.3rem;
`;

export const SubNavigation = Styled.div`
    position: relative;
    height: ${props => (props.height ? props.height : `40px`)};
    background-color: ${props =>
      props.height ? props.bgcolor : "rgb(230, 230, 230)"};
    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const SubNavLinksContainerBox = Styled(Box)`
    display: block;
    height: 100%;
`;

export const SubNavWrapperFlex = Styled(Flex)`
    height: 100%;
`;

export const SubNavLinksWrapperFlex = Styled(Flex)`
    height: 100%;
`;

export const SubNavLinkWrapperBox = Styled(Box)`
    display: flex;
    height: 100%;
    padding: 0px .5rem;
    margin-right: 2rem;
    font-size: 1rem;
    a {
        color: inherit;
        display: block;
        padding-top: 10px;
        &.active{
            border-bottom: .25rem solid #DB4437;
        }
    }
`;

export const SubNavControlElementsBox = Styled(Box)`
    min-width: 20rem;
    height: 70%;
`;

export const MoreIconWrapper = Styled.div`
    width: 3rem;
    img{
        max-width: 50%;
        max-height: 50%;
        display: block;
        margin: 0 auto;
    }
`;

export const SubNavControlElementsWrapperFlex = Styled(Flex)`
    height: 100%;
`;

export const SubNavControlElementsWrapperBox = Styled(Box)`
    height: 100%;
`;

export const ControlIconWrapper = Styled.div`
    width: 1.2rem;
    height: 1.2rem;
    display: inline-flex;
    margin-right: 1rem;
    img{
        max-width: 100%;
        max-height: 100%;
        display: inline-block;
    }
`;

export const FilterButtonContainer = Styled.div`
    border: 1px solid rgba(200, 200, 200, 0.9);
    border-radius: 1px;
    width: 15rem;
    height: 100%;
    display: flex;
    padding: 0px;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    cursor: pointer;
    position: relative;
    background-color: #FFFFFF;
`;

export const SearchBoxWrapperBox = Styled.div`
    width: 25rem;
    background-color: #FFFFFF;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 1rem;
    border-radius: 1px;
    .search-icon-wrapper{
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 40%;
            margin: 0 auto;
            opacity: 0.8;
        }
    }
    .search-bar{
        width: 100%;
        border: none;
        outline: none;
        &:focus{

        }
    }
`;
