/* eslint-disable no-nested-ternary */
import React from "react";
import Styled from "styled-components";
import { Flex, Box } from "rebass";
import { Link } from "react-router-dom";

// Bring in Icons
import loginIcon from "../../../resources/icons/login-icon.svg";
import menuIcon from "../../../resources/icons/menu.svg";
import topGamesIcon from "../../../resources/icons/top-games.svg";

const FooterNavigationContainer = Styled.div`
    @media screen and (min-width: 960px){
      display: none;
    }
    background-color: ${props =>
      props.theme
        ? props.theme.colorTheme
          ? props.theme.colorTheme.grey
          : "inherit"
        : "inherit"};
    border-top: 1px solid rgba(50, 50, 50, 0.125);
    padding: 10px 5px;
    height: 6.5rem;
    position: fixed;
    z-index: 100;
    bottom: 0;
    width: 100vw;
    left: 0;
`;

const NavigationLinksContainer = Styled(Flex)``;

const NavigationLinkWrapper = Styled(Box)`
  display: flex;
  flex-direction: column;
  > div {
    width: 100%
  }
`;

const NavigationLink = Styled(Link)`
  display: flex;
  flex-direction: column;
  width: 7rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const NavigationLinkIconWrapper = Styled.div`
  height: 3rem;
  width: 35%;
  margin: 0 auto;
  img {
    max-width: 100%;
    height: 100%;
    text-align: center;
  }
`;

const NavigationTextWrapper = Styled.div`
  span {
    display: block;
    color: ${props => props.theme.colorTheme.black};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const FixedFooterNavigation = () => {
  return (
    <FooterNavigationContainer>
      <NavigationLinksContainer flexDirection="row" width={["0.8"]}>
        {/* Menu Link */}
        <NavigationLinkWrapper width={[4 / 12]}>
          <NavigationLink to="/">
            <NavigationLinkIconWrapper>
              <img src={menuIcon} alt="menu icon" />
            </NavigationLinkIconWrapper>
            <NavigationTextWrapper>
              <span>Menu</span>
            </NavigationTextWrapper>
          </NavigationLink>
        </NavigationLinkWrapper>

        {/* Tog Games Link */}
        <NavigationLinkWrapper width={[4 / 12]}>
          <NavigationLink to="/">
            <NavigationLinkIconWrapper>
              <img src={topGamesIcon} alt="top games icon" />
            </NavigationLinkIconWrapper>
            <NavigationTextWrapper>
              <span>Top Games</span>
            </NavigationTextWrapper>
          </NavigationLink>
        </NavigationLinkWrapper>

        {/* Tog Games Link */}
        <NavigationLinkWrapper width={[4 / 12]}>
          <NavigationLink to="/">
            <NavigationLinkIconWrapper>
              <img src={loginIcon} alt="login icon" />
            </NavigationLinkIconWrapper>
            <NavigationTextWrapper>
              <span>Login</span>
            </NavigationTextWrapper>
          </NavigationLink>
        </NavigationLinkWrapper>
      </NavigationLinksContainer>
    </FooterNavigationContainer>
  );
};

export default FixedFooterNavigation;
