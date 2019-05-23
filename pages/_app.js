import React from "react";
import App, { Container } from "next/app";
import Styled, { ThemeProvider } from "styled-components";

/**
 * Define basic theme properties like colors
 */
const Theme = {
  colorTheme: {
    red: "#DB4437",
    white: "#FFFFFF",
    black: "#1F1F1F",
    grey: "#F2F2F2"
  },
  breakpoints: ["480px", "736px", "960px", "1280px"]
};

// Styled Components...
const DocumentWrapperContainer = Styled.div`
  font-family: 'Lato', sans-serif;
  position: relative;
  background-color: #FFFFFF;
  color: #1f1f1f;
  width: 100%;
  min-height: 100vh;
  div{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
`;

class MainApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={Theme}>
          <DocumentWrapperContainer>
            <Component {...pageProps} />
          </DocumentWrapperContainer>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MainApp;
