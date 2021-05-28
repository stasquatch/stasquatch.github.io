import * as React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Terrazzo from './terrazzo';
import styled from 'styled-components';
import GlobalStyles from './global-styles';

const Main = styled.main`
  padding: 2rem;
  max-width: 700px;
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const breakpoints = {
  tablet: 769,
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
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
