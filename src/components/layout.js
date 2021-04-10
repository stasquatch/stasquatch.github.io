/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import '@fontsource/lato'
// import Header from "./header"
import Terrazzo from "./terrazzo"
import "./layout.css"
import styled from 'styled-components';

const Main = styled.main`
  padding: 20px 0;
  max-width: 800px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Terrazzo />
        <Main>
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
