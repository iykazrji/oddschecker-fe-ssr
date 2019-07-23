// This is the Main Ad Wrapper component.
// If uses the Render Props pattern to take in and render an Ad
// The Component Assumes the Ads are all in the Horizontal Mode
// However, a dimension array can be passed to the component with each
// Array element denoting [WIDTH, HEIGHT].
// PropTypes for the various possible props has been passed.

import React from "react";
import Styled from "styled-components";
import PropTypes from "prop-types";
import { Flex, Box } from "rebass";

const AdWrapperFlex = Styled(Flex)`
  height: ${props => (props.height ? props.height : "10rem")};
`;

const AdWrapperContainer = Styled(Box)`
  height: 100%;
  background-color: ${props =>
    props.hasRender ? null : "rgba(200, 200, 200, 0.7)"};
  max-width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: 100%;
  }
`;

const AdWrapper = ({ height, mt, my, mx, mb, render }) => {
  return (
    <AdWrapperFlex
      width={[1]}
      height={height || "12rem"}
      mt={mt}
      my={my}
      mx={mx}
      mb={mb}>
      <AdWrapperContainer hasRender={!!render}>
        {render ? render() : null}
      </AdWrapperContainer>
    </AdWrapperFlex>
  );
};

AdWrapper.propTypes = {
  render: PropTypes.func.isRequired
};

export default AdWrapper;
