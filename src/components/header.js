import * as React from "react"
import { Link } from "gatsby"
import '@fontsource/nunito-sans'
import '@fontsource/nunito-sans/900.css'
import styled from "styled-components"

const Title = styled.h1`
  margin: 0;
  display: inline-block;
  `;

const TitleLink = styled(Link)`
  color: #683b2b;
  text-decoration: none;
  font-family: "Nunito Sans";
  font-weight: 900;
  font-size: 5rem;
  text-transform: lowercase;
  `;

const HandleTag = styled.span`
  display: inline-block;
  padding: 1rem;
  margin-left: 20px;
  background: #d49e8d;
  border-radius: .5rem;
  color: #faf6f2;
  vertical-align: text-bottom;
  position: relative;
  z-index: 1;

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
`;

const Header = () => (
  <>
    <Title className={`title`}>
      <TitleLink className={`title-link`} to="/">
        Stacy Harrison
      </TitleLink>
    </Title>
    <HandleTag className={`handle-tag`}>
      @stasquatch
    </HandleTag>
  </>
)

export default Header
