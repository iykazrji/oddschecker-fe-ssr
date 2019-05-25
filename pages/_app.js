import React from "react";
import App, { Container } from "next/app";
import Styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
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
  font-size: 62.5%;
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
        <Head>
          {/* Import Fonts... */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
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
