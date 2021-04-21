import * as React from "react"
import { Link } from "gatsby"
import '@fontsource/nunito-sans'
import '@fontsource/nunito-sans/900.css'
import styled from "styled-components"

const HeaderWrapper = styled.div`
  line-height: 4rem;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const Title = styled.h1`
  margin: 0;
  display: inline-block;
`;

const TitleLink = styled(Link)`
  color: #683b2b;
  text-decoration: none;
  font-family: "Nunito Sans";
  font-weight: 900;
  font-size: 5.5rem;
  text-transform: lowercase;
  &:hover,
  &:focus {
    color: #41241a;
    
  }
`;

const HandleTagWrapper = styled.span`
  display: inline-block;
  @media (max-width: ${props => props.breakpoints.tablet - 1}px) {
    margin-top: 1.2rem;
    display: block;
    > a > span {
      margin-left: 0;
      &::after {
        top: 0;
        left: 15px;
      }
    }
  }
`;

const HandleTag = styled.a`
  text-decoration: none;
  &:hover,
  &:active,
  &:visited,
  &:focus {
    text-decoration: underline;
    text-decoration-color: #d5e6ea;
  }
  &:hover,
  &:focus {
    > span,
    > span::after {
      background: #b28374;
    }
  }
  > span {
    padding: 1rem;
    margin-left: 20px;
    background: #d49e8d;
    border-radius: .5rem;
    color: #faf6f2;
    vertical-align: text-bottom;
    position: relative;
    z-index: 1;
    font-size: 2.5rem;
  
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -5px;
      width: 15px;
      height: 15px;
      margin: -7px 0;
      background: #d49e8d;
      transform: rotate(45deg);
      z-index: -1;
    }
  }
`;

const Header = (props) => {
  let breakpoints = props.breakpoints || {};

  return (
    <HeaderWrapper>
      <Title className={`title`}>
        <TitleLink className={`title-link`} to="/">
          Stacy Harrison
        </TitleLink>
      </Title>
      <HandleTagWrapper breakpoints={breakpoints}>
        <HandleTag className={`handle-tag`} href="https://github.com/stasquatch" target="_blank" rel="noopener noreferrer">
          <span>
            @stasquatch
          </span>
        </HandleTag>
      </HandleTagWrapper>
    </HeaderWrapper>
  )
}

export default Header
