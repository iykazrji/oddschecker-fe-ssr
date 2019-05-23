import React from "react";
import cachetteNavigation from "./cachette-navigation";
import { Flex, Box } from "rebass";
import PropTypes from "prop-types";
import Styled from "styled-components";
import Calendar from "react-calendar/dist/entry.nostyle";
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from "react-simple-dropdown";
import "react-simple-dropdown/styles/Dropdown.css";

// icons
import userIcon from "../../../resources/icons/user.svg";
import rightArrowIcon from "../../../resources/icons/right-arrow.svg";
import moreIcon from "../../../resources/icons/more-button.svg";
import controlsIcon from "../../../resources/icons/controls.svg";
import searchIcon from "../../../resources/icons/search.svg";

// Get some shared Styles...
import {
  NavContainer,
  NavContainerFlex,
  LogoContainerBox,
  LogoWrapper,
  StyledLink,
  StyledNavLink,
  StyledSubNavLink,
  NavLinksContentContainerBox,
  NavLinksContainerFlex,
  NavLinkWrapperBox,
  ArrowIcon,
  ArrowIconWrapper,
  RegistrationControlsBox,
  IconWrapper,
  RegisterBtn,
  LoginBtn,
  SubNavigation,
  SubNavLinksContainerBox,
  SubNavWrapperFlex,
  SubNavLinksWrapperFlex,
  SubNavLinkWrapperBox,
  SubNavControlElementsBox,
  MoreIconWrapper,
  SubNavControlElementsWrapperFlex,
  SubNavControlElementsWrapperBox,
  ControlIconWrapper,
  FilterButtonContainer,
  SearchBoxWrapperBox,
} from "./styled";

const StyledDropdown = Styled(Dropdown)`
	width: 100%;
	height: 100%;
	.dropdown__trigger{
		width: 100%;
		height: 100%;
		display: flex;
		text-align: center;
    justify-content: center;
    align-items: center;
    span{
      display: block;
    }
	}
`;
const StyledCalendar = Styled(Calendar)`
	position: absolute;
	top: .5rem;
	transform: translateX(-30%);
	width: 35rem;
	background-color: #FFFFFF;
	z-index: 20;
	border: 1px solid rgba(50, 50, 50, 0.09);
	box-shadow: 0px 5px 20px rgba(50, 50, 50, 0.09);
	padding: .5rem;
	button{
		border: none;
		padding: 1rem;
		background-color: transparent;
		border-radius: 3px;
		&:hover{
			background-color: rgba(80, 80, 80, 0.07);
		}
	}
	.react-calendar__navigation {
		padding: 0rem;
		border-bottom: 1px solid rgba(50, 50, 50, 0.09);
		margin-bottom: 1rem;
		.react-calendar__navigation__label{
			color: #DB4437;
		}
	}
	.react-calendar__month-view {
		margin-top: 1.5rem;
		justify-content: space-around;
		.react-calendar__month-view__weekdays__weekday{
			text-align: center;
		}
		.react-calendar__month-view__days{
			border-top: 1px solid rgba(50, 50, 50, 0.09);
			margin-top: 1.5rem;
			display: grid !important;
			grid-template-columns: repeat(7, auto);
			.react-calendar__month-view__days__day{
				max-width: 100% !important;
				text-align: center;
			}
			.react-calendar__month-view__days__day--neighboringMonth{
				opacity: 0.3;
			}
		}

	}
`;

class Navigation extends React.Component {
  state = {
    startDate: null,
  };

  handleDateChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    let { props } = this;
    return (
      <NavContainer navHeight={props.navHeight}>
        <NavContainerFlex alignItems="center" flexDirection="row">
          <LogoContainerBox
            className="logo-container"
            width={[`8rem`, `10rem`]}
          >
            <StyledLink to="/">
              <LogoWrapper className="logo-wrapper">Logo</LogoWrapper>
            </StyledLink>
          </LogoContainerBox>

          {/* Wrapper components for the NavLinks
           * TODO: Convert and render this with a render function for a
           * Cleaner more re-usable result...
           */}
          <NavLinksContentContainerBox>
            <NavLinksContainerFlex
              flexDirection="row"
              justifyContent="space-between"
            >
              <ArrowIconWrapper>
                <ArrowIcon src={rightArrowIcon} />
              </ArrowIconWrapper>
              <NavLinkWrapperBox>
                <StyledNavLink to="/">Home</StyledNavLink>
              </NavLinkWrapperBox>
              <NavLinkWrapperBox>
                <StyledNavLink to="#">About Us</StyledNavLink>
              </NavLinkWrapperBox>
              <NavLinkWrapperBox>
                <StyledNavLink to="#">Instance Games</StyledNavLink>
              </NavLinkWrapperBox>
              <NavLinkWrapperBox>
                <StyledNavLink to="#">Betting Highlights</StyledNavLink>
              </NavLinkWrapperBox>
              <NavLinkWrapperBox>
                <StyledNavLink to="#" className="last">
                  Contact Us
                </StyledNavLink>
              </NavLinkWrapperBox>
            </NavLinksContainerFlex>
          </NavLinksContentContainerBox>

          {/* Wrapper Component for the Registration Controls */}
          <RegistrationControlsBox>
            <Flex flexDirection="row">
              <Box className="login-control" width={["10rem"]}>
                <LoginBtn
                  className="login-btn"
                  to="#"
                  bgcolor="rgba(0,0,0,0)"
                  color="inherit"
                  width="80px"
                >
                  <IconWrapper className="icon-wrapper">
                    <img src={userIcon} alt="user-icon" />
                  </IconWrapper>
                  <span>Login</span>
                </LoginBtn>
              </Box>
              <Box className="register-control">
                <RegisterBtn
                  className="register-btn"
                  to="#"
                  bgcolor="#DB4437"
                  color="#FFFFFF"
                  width={`10rem`}
                  margin="0px 0px 0px 0rem"
                  padding="1.2rem 1.5rem"
                >
                  Register
                </RegisterBtn>
              </Box>
            </Flex>
          </RegistrationControlsBox>
        </NavContainerFlex>
        {/**
          Here is the check and render for the Subnavigation for pages with such structure in place...
          TODO: Abstract this into a separate render function for cleanliness and re-usablility...
        */}
        {props.withSubnav ? (
          <SubNavigation className="subnav-container">
            <SubNavWrapperFlex
              className="subnav-wrapper-flex"
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <SubNavLinksContainerBox
                className="subnav-links-container"
                ml={["2rem", "5rem"]}
              >
                <SubNavLinksWrapperFlex className="subnav-links-wrapper-flex">
                  <SubNavLinkWrapperBox className="subnavLinkWrapperBox">
                    <StyledSubNavLink activeClassName="active" to="/">
                      All Games
                    </StyledSubNavLink>
                  </SubNavLinkWrapperBox>
                  <SubNavLinkWrapperBox className="subnavLinkWrapperBox">
                    <StyledSubNavLink activeClassName="active" to="#">
                      Live Games
                    </StyledSubNavLink>
                  </SubNavLinkWrapperBox>
                  <SubNavLinkWrapperBox className="subnavLinkWrapperBox">
                    <StyledSubNavLink activeClassName="active" to="#">
                      Finished
                    </StyledSubNavLink>
                  </SubNavLinkWrapperBox>
                  <SubNavLinkWrapperBox className="subnavLinkWrapperBox">
                    <StyledSubNavLink activeClassName="active" to="#">
                      Scheduled
                    </StyledSubNavLink>
                  </SubNavLinkWrapperBox>
                  <SubNavLinkWrapperBox className="subnavLinkWrapperBox">
                    <StyledSubNavLink activeClassName="active" to="#">
                      <MoreIconWrapper className="more-icon-wrapper">
                        <img src={moreIcon} alt="more-icon" />
                      </MoreIconWrapper>
                    </StyledSubNavLink>
                  </SubNavLinkWrapperBox>
                </SubNavLinksWrapperFlex>
              </SubNavLinksContainerBox>
              <SubNavControlElementsBox
                className="subnav-control-elements"
                ml={"auto"}
                mr="5rem"
              >
                <SubNavControlElementsWrapperFlex>
                  <SubNavControlElementsWrapperBox mr="1rem">
                    <FilterButtonContainer bgcolor="#FFFFFF" color="#1F1f1f">
                      <StyledDropdown>
                        <DropdownTrigger>
                          <ControlIconWrapper>
                            <img
                              src={controlsIcon}
                              alt="filter-controls-icon"
                            />
                          </ControlIconWrapper>
                          <span>Filter by Date</span>
                        </DropdownTrigger>
                        <DropdownContent>
                          <StyledCalendar
                            onChange={this.handleDateChange}
                            value={this.state.startDate}
                            prev2Label={null}
                            next2Label={null}
                          />
                        </DropdownContent>
                      </StyledDropdown>
                    </FilterButtonContainer>
                  </SubNavControlElementsWrapperBox>
                  <Box>
                    <SearchBoxWrapperBox classNam="input-field">
                      <div className="search-icon-wrapper">
                        <img src={searchIcon} alt="search-icon" />
                      </div>
                      <input
                        className="search-bar"
                        type="text"
                        placeholder="Search"
                      />
                    </SearchBoxWrapperBox>
                  </Box>
                </SubNavControlElementsWrapperFlex>
              </SubNavControlElementsBox>
            </SubNavWrapperFlex>
          </SubNavigation>
        ) : null}
      </NavContainer>
    );
  }
}

export const CachetteNavigation = cachetteNavigation;
export default Navigation;

Navigation.propTypes = {
  navHeight: PropTypes.string.isRequired,
};
