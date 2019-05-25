import styled from "styled-components";
import PropTypes from "prop-types";

// Primary Button Style
export const ButtonPrimary = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#1F1F1F")};
  color: ${props => (props.color ? props.color : "#FFFFFF")};
  width: ${props => (props.width ? props.width : "10rem")};
  font-size: ${props => (props.fontSize ? props.fontSize : `1.2rem`)};
  padding: ${props => (props.padding ? props.padding : `1rem 1.5rem`)};
  text-align: center;
`;

export const LinkBtn = styled.a`
  border-radius: 5px;
  background-color: ${props => (props.bgcolor ? props.bgcolor : "#1F1F1F")};
  color: ${props => (props.color ? props.color : "#FFFFFF")};
  width: ${props => (props.width ? props.width : "10rem")};
  font-size: ${props => (props.fontSize ? props.fontSize : `1.2rem`)};
  padding: ${props => (props.padding ? props.padding : `1rem 1.5rem`)};
  margin: ${props => (props.margin ? props.margin : `0rem`)};
  display: block;
  text-align: center;
`;

ButtonPrimary.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string
};

LinkBtn.propTypes = {
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string
};
