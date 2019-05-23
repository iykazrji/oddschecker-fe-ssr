// This component uses the Render Prop Pattern to add the 'Cachette'
// Component Behaviour to the Navigation Component...

import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { CachetteWrapper } from "./styled";

export default class CachetteNavigation extends Component {
  state = {
    lastScrollTop: 0,
    delta: 5,
    isNavVisible: !!this.props.initVisible,
    shouldNavVisible: !!this.props.initVisible,
    isScrolling: false
  };

  // Declare Refs...
  cachetteNode = React.createRef();

  componentDidMount() {
    // Add an Event Listener to listen for scroll Action
    window.addEventListener("scroll", timer => {
      this.scrollTimerFn(timer);
    });

    // Check the NavVisibility...
    window.requestAnimationFrame(this.checkNavVisibility);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.lastScrollTop === nextState.lastScrollTop) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", timer => {
      this.scrollTimerFn(timer);
    });

    window.cancelAnimationFrame(this.checkNavVisibility);
  }

  /**
   * @function startScroll - Function to update state whenever the
   * user starts scrolling...
   */
  startScroll = () => {
    this.setState(() => ({
      isScrolling: true
    }));
  };

  /**
   * @function stopScroll - Function to update state whenever the
   * user stops scrolling
   */
  stopScroll = () => {
    this.setState(() => ({
      isScrolling: false
    }));
  };

  /**
   * @function scrollTimerFn - Timer function to handle scroll dampening and
   * timeouts.
   */
  scrollTimerFn = timer => {
    if (timer !== null) {
      clearTimeout(timer);
      if (!this.state.isScrolling) {
        this.startScroll();
      }
    }
    timer = setTimeout(() => {
      if (this.state.isScrolling) {
        this.stopScroll();
      }
    }, 250);
  };

  /**
   * @function checkNavVisibility - Function to check if the window is scrolling.
   * Calls @function hasScrolled
   */
  checkNavVisibility = () => {
    this.checkPageScrolledPastTop();
    if (this.state.isScrolling) {
      this.hasScrolled();
    }
    this.visibleCheckInterval = window.requestAnimationFrame(
      this.checkNavVisibility
    );
  };

  /**
   * @function checkPageScrolledPastTop - Function to check if the scroll Action has passed the top...
   */
  checkPageScrolledPastTop = () => {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop >= this.props.navHeight + 100) {
      this.setState({
        shouldNavVisible: true
      });
    } else if (this.props.initVisible) {
      this.setState({
        shouldNavVisible: false
      });
    } else {
      this.setState({
        shouldNavVisible: false,
        isNavVisible: false
      });
    }
  };

  /**
   * @function hasScrolled - Function to make state updates once the scroll action
   * has been performed...
   */
  hasScrolled() {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (Math.abs(this.state.lastScrollTop - scrollTop) <= this.state.delta) {
      return;
    }
    // If User scrolled down and are past the navbar, set Visible to false
    // This is necessary so you never see what is "behind" the navbar.
    if (
      scrollTop > this.state.lastScrollTop &&
      scrollTop > this.props.navHeight
    ) {
      // Scrolling Down
      this.setState({
        isNavVisible: false
      });
    } else if (
      scrollTop + window.innerHeight < document.body.clientHeight &&
      this.state.shouldNavVisible
    ) {
      this.setState({
        isNavVisible: true
      });
    }
    // Reset the LastScrollTop state to The current Scroll Position
    this.setState({
      lastScrollTop: scrollTop
    });
  }

  render() {
    const { isNavVisible } = this.state;
    const { navHeight } = this.props;
    return (
      <CachetteWrapper
        ref={this.cachetteNode}
        height={navHeight}
        isNavVisible={isNavVisible}>
        {_.isFunction(this.props.navComponent)
          ? this.props.navComponent()
          : this.props.navComponent}
      </CachetteWrapper>
    );
  }
}

CachetteNavigation.propTypes = {
  initVisible: PropTypes.bool.isRequired,
  navComponent: PropTypes.node.isRequired,
  navHeight: PropTypes.string.isRequired
};
