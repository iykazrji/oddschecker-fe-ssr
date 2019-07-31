/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-nested-ternary */
import React, { Fragment, useState } from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Flex, Box } from "rebass";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { mailchimp_url } from "../../../../config/url";

// Social Media Icons
import GooglePlusIcon from "@/resources/icons/google-plus-logo.svg";
import FacebookIcon from "@/resources/icons/facebook-logo.svg";
import TwitterIcon from "@/resources/icons/twitter-logo.svg";
import InstagramIcon from "@/resources/icons/instagram-logo.svg";
import SendIcon from "@/resources/icons/send-button.svg";
import SendIconDisabled from "@/resources/icons/send-button-disabled.svg";
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
  opacity: ${props => (props.disabled ? `0.6` : `1`)};
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
  background-image: ${props =>
    props.disabled ? `url(${SendIconDisabled})` : `url(${SendIcon})`};
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

// Configure out Toast
toast.configure();
/**
 * Site's footer component.
 */
const Footer = () => {
  const [formValue, setformValue] = useState("");
  const [formDisabled, setFormDisabled] = useState(false);

  const changeFormValue = e => {
    e.preventDefault();
    setformValue(e.target.value);
  };

  /**
   * Submit Email Action
   * @param email
   *
   */
  const SubmitEmail = email => {
    setFormDisabled(true);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailValid = re.test(String(email).toLowerCase());
    if (!isEmailValid) {
      toast.error(`Please Provide a Proper Email Address.`, {
        position: toast.POSITION.BOTTOM_LEFT,
        toastId: "xx-yy"
      });
      console.error("An Invalid email was passed");
      setFormDisabled(false);
      return null;
    }

    return MailChimpSubscribe({
      email,
      mailchimp_url
    });
  };

  /**
   * Subscribe to Mailchimp API
   * @param email
   */
  const MailChimpSubscribe = obj => {
    const url = process.env.production
      ? mailchimp_url || obj.url
      : `https://cors-anywhere.herokuapp.com/${mailchimp_url}` || obj.url;
    axios
      .post(
        url,
        { EMAIL: obj.email },
        {
          params: {
            u: process.env.MAILCHIMP_U,
            id: process.env.MAILCHIMP_ID
          },
          dataType: "json",
          contentType: "application/json; charset=utf-8"
        }
      )
      .then(result => {
        setFormDisabled(false);

        toast.success(`Thanks for Subscribing!`, {
          position: toast.POSITION.BOTTOM_LEFT,
          toastId: "xx-yy"
        });
        return result;
      })
      .catch(err => {
        setFormDisabled(false);
        toast.error(`An Error occured while subscribing. Please try again`, {
          position: toast.POSITION.BOTTOM_LEFT,
          toastId: "xx-yy"
        });
        console.log(err);
        return false;
      });
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
              <SubscrptionForm disabled={formDisabled}>
                <SubscriptionInput
                  placeholder="Enter your email address."
                  value={formValue}
                  onChange={changeFormValue}
                  disabled={formDisabled}
                />
                <SubscriptionSubmitButton
                  ariaRole="submit"
                  disabled={formDisabled}
                  onClick={e => {
                    setFormDisabled(true);
                    e.preventDefault();
                    SubmitEmail(formValue);
                  }}
                />
              </SubscrptionForm>
            </SubscriptionFormContainer>
          </FooterContentBox>
        </FooterContentContainer>
      </FooterMainContainer>
    </Fragment>
  );
};

export default Footer;
