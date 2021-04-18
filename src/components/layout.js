import * as React from "react"
import PropTypes from "prop-types"
import '@fontsource/lato'
import Header from "./header"
import Terrazzo from "./terrazzo"
import styled, { createGlobalStyle } from 'styled-components';

const Main = styled.main`
  padding: 2rem;
  max-width: 800px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 62.5%/1.45em "Lato", serif, sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    background: #fff;
  }
  body {
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #683b2b;
    font-family: "Lato", serif;
    font-size: 2rem;
    font-weight: normal;
    word-wrap: break-word;
  }
`;

const breakpoints = {
  tablet: 769
};

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Terrazzo breakpoints={breakpoints} />
        <Main>
          <Header breakpoints={breakpoints} />
          {children}
        </Main>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
