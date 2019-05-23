/* eslint-disable no-nested-ternary */
import React, { Fragment, useState } from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Flex, Box } from "rebass";

// Social Media Icons
import GooglePlusIcon from "/static/icons/google-plus-logo.svg";
import FacebookIcon from "/static/resources/icons/facebook-logo.svg";
import TwitterIcon from "/static/resources/icons/twitter-logo.svg";
import InstagramIcon from "/static/resources/icons/instagram-logo.svg";
import SendIcon from "/static/resources/icons/send-button.svg";

/** Main background component for the site's Footer
 *  @component
 */
const FooterMainContainer = Styled.div`
    min-height: 300px;
    border-top: 1px solid rgba(50, 50, 50, 0.125);
    background-color: rgb(240, 240, 240);
    padding: 40px 30px;
    position: relative;
    z-index: 3;
`;

/**
 * Flex container to hold the columns to hold the footer contents.
 * @component
 */
const FooterContentContainer = Styled(Flex)`
  @media screen and (max-width: 960px){
    padding-bottom: 6.5rem;
  }
`;

/**
 * Box segments footer for the footer
 * @component
 */
const FooterContentBox = Styled(Box)``;

/**
 * Footer Logo Header
 * @component
 */
const FooterLogoH2 = Styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    @media screen and (max-width: 480px){
      text-align: center;
    }
    &.subscribe-heading{
      @media screen and (max-width: 736px){
        text-align: center;
      }
    }
`;

/**
 *  Footer Sub-Text container
 *  @component
 */
const FooterSubtextP = Styled.p`
  font-size: 14px;
  color: rgb(100, 100, 100);
`;

/**
 * The container for the Social media icons
 * @component
 */
const SocialMediaIconsContainer = Styled(Flex)``;

/**
 * The wrapper for the Social Media icons.
 */
const SocialMediaIconsWrapper = Styled(Box)``;

/**
 * Social media icon's link
 *  @component
 */
const SocialMediaIconLink = Styled.a`
    display: block;
    width: 100%;
    text-decoration: none;
    height: 15px;
    text-align: left;
    @media screen and (max-width: 480px){
      text-align: center;
    }
`;

/**
 * Social Media icon image
 * @component
 */
const SocialMediaIcon = Styled.img`
    max-width: 100%;
    max-height: 100%;
`;

/**
 * Subscription form container
 * @component
 */
const SubscriptionFormContainer = Styled.div``;

/**
 * Subscription form
 * @component
 */
const SubscrptionForm = Styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(10, 10, 10, 0.35);
`;

/**
 * Subscription Input box
 * @component
 */
const SubscriptionInput = Styled.input`
  border: none;
  background: transparent;
  height: 30px;
  padding: 5px;
  width: 100%;
  color: ${props =>
    props.theme
      ? props.theme.colorTheme
        ? props.theme.colorTheme.black
        : "inherit"
      : "inherit"};
`;

/**
 * Subscription Submit button
 * @component
 */
const SubscriptionSubmitButton = Styled.button`
  border: none;
  width: 30px;
  height: 15px;
  background-image: url(${SendIcon});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,0);
`;

/**
 * Component to render Social Media Icon
 * @component
 */
const RenderSocialMediaIcon = ({ linkRef, iconSrc, altText }) => {
  return (
    <SocialMediaIconLink className="sm-link" target="_blank" href={{ linkRef }}>
      <SocialMediaIcon className="sm-icon" alt={{ altText }} src={iconSrc} />
    </SocialMediaIconLink>
  );
};

RenderSocialMediaIcon.propTypes = {
  /** The href value for the link */
  linkRef: PropTypes.string.isRequired,
  /** The source value for the icon */
  iconSrc: PropTypes.string.isRequired,
  /** The alt text for the image */
  altText: PropTypes.string.isRequired
};

/**
 * Site's footer component.
 */
const Footer = () => {
  const [formValue, setformValue] = useState("");

  const changeFormValue = e => {
    setformValue(e.target.value);
  };
  return (
    <Fragment>
      <FooterMainContainer>
        <FooterContentContainer
          flexDirection="row"
          width={[1, 1, 0.9, 0.75]}
          mx="auto"
          flexWrap="wrap">
          <FooterContentBox
            className="logo-text-container"
            width={[1, 6 / 12, 4 / 12, 4 / 12]}
            px={["5px", "10px", "15px", "20px"]}
            mb={["1.5rem", "0.5rem", "0.5rem", "0rem"]}>
            <FooterLogoH2 className="footer-logo">Oddschecker</FooterLogoH2>
            <FooterSubtextP>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </FooterSubtextP>
          </FooterContentBox>

          <FooterContentBox
            className="social-media-icons-container"
            width={[1, 6 / 12, 4 / 12, 3 / 12]}
            px={["5px", "10px", "15px", "20px"]}
            mb={["3rem", "0.5rem", "0.5rem", "0rem"]}>
            <FooterLogoH2 className="footer-logo">Follow Us</FooterLogoH2>
            <SocialMediaIconsContainer flexDirection="row">
              <SocialMediaIconsWrapper width={[3 / 12]} mr="5px">
                <RenderSocialMediaIcon
                  linkRef="google.com"
                  iconSrc={GooglePlusIcon}
                  altText="google plus icon"
                />
              </SocialMediaIconsWrapper>

              <SocialMediaIconsWrapper width={[3 / 12]} mr="5px">
                <RenderSocialMediaIcon
                  linkRef="twitter.com"
                  iconSrc={TwitterIcon}
                  altText="twitter icon"
                />
              </SocialMediaIconsWrapper>

              <SocialMediaIconsWrapper width={[3 / 12]} mr="5px">
                <RenderSocialMediaIcon
                  linkRef="facebook.com"
                  iconSrc={FacebookIcon}
                  altText="facebook icon"
                />
              </SocialMediaIconsWrapper>

              <SocialMediaIconsWrapper width={[3 / 12]} mr="5px">
                <RenderSocialMediaIcon
                  linkRef="instagram.com"
                  iconSrc={InstagramIcon}
                  altText="instagram icon"
                />
              </SocialMediaIconsWrapper>
            </SocialMediaIconsContainer>
          </FooterContentBox>

          <FooterContentBox
            className="logo-text-container"
            width={[1, 1, 4 / 12, 4 / 12]}
            px={["2.5px", "2.5px", "5px", "5px"]}
            mb={["1.5rem", "0.5rem", "0.5rem", "0rem"]}>
            <FooterLogoH2 className="footer-logo subscribe-heading">
              Subscribe and stay tuned
            </FooterLogoH2>
            <SubscriptionFormContainer>
              <SubscrptionForm>
                <SubscriptionInput
                  placeholder="Enter your email address."
                  value={formValue}
                  onChange={changeFormValue}
                />
                <SubscriptionSubmitButton ariaRole="submit" />
              </SubscrptionForm>
            </SubscriptionFormContainer>
          </FooterContentBox>
        </FooterContentContainer>
      </FooterMainContainer>
    </Fragment>
  );
};

export default Footer;
