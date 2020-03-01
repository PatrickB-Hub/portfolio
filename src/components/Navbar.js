import React, { useState } from "react";
import styled, { css } from "styled-components";

import { navReveal } from "../atoms/keyframes";
import { color_primary, color_grey_6 } from "../atoms/variables";

import { ReactComponent as MenuSvg } from "../images/icons/menu.svg";

import { media } from "../utilities/mediaQueriesBuilder";
import smoothScroll from "../utilities/smoothScroll";

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    const HeroElement = document.getElementById("home");
    setNavFixed(HeroElement.getBoundingClientRect().bottom <= 70);
  };

  window.onscroll = () => toggleNav();

  const toggleCollapsible = show => {
    if (show && menuOpen) setMenuOpen(!show);
    else setMenuOpen(show);
  };

  return (
    <Nav isNavFixed={navFixed}>
      <Wrapper isNavFixed={navFixed} menuOpen={menuOpen}>
        <Logo>
          <Name
            onClick={() => {
              smoothScroll("home");
            }}
          >
            PB
          </Name>
        </Logo>
        <Toggler
          onClick={() => {
            toggleCollapsible(true);
          }}
          onBlur={() => {
            toggleCollapsible(false);
          }}
        >
          <MenuSvg />
        </Toggler>
        <div className={"collapsible"}>
          <NavList>
            <li></li>
            <NavItem>
              <NavButton refID="about" text="Über mich" />
            </NavItem>
            <NavItem>
              <NavButton refID="skills" text="Fähigkeiten" />
            </NavItem>
            <NavItem>
              <NavButton refID="projects" text="Projekte" />
            </NavItem>
            <NavItem>
              <NavButton refID="contact" text="Kontakt" />
            </NavItem>
          </NavList>
        </div>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;

const NavButton = ({ refID, text }) => (
  <button onClick={() => smoothScroll(refID)}>{text}</button>
);

// once user scrolls past the hero section, navbar sticks to top and turns blue
const Nav = styled.nav`
  position: ${props => (props.isNavFixed ? "fixed" : "absolute")};
  left: 0;
  right: 0;
  z-index: 999;
  color: #fff;
  background-color: ${props =>
    props.isNavFixed ? color_primary : "rgba(255,255,255,.02)"};
  box-shadow: ${props =>
    props.isNavFixed
      ? "0 .1rem .15rem rgba(0,0,0,.3)"
      : "0 .1rem .15rem rgba(0,0,0,.1)"};
  animation: ${props => (props.isNavFixed ? navReveal : "none")} 0.3s ease-out
    0s;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;

  .collapsible {
    ${media.sizeIII`
			position: absolute;
			display: inline;
			top: 100%;
			right: 0;
			margin: .5rem;
			padding: 1rem;
			z-index: 9999;
			background-color: ${props =>
        props.isNavFixed ? color_primary : "rgba(255,255,255,.1)"};
			box-shadow: ${props =>
        props.isNavFixed
          ? "0 .1rem .15rem rgba(0,0,0,.3)"
          : "0 .1rem .15rem rgba(0,0,0,.1)"};
			border-radius: 3px;
			transition: all .2s;
			visibility: hidden;
      opacity: 0;
      
      ${props =>
        props.menuOpen &&
        css`
          visibility: visible;
          opacity: 1;
        `}
		`}
  }
`;

const Logo = styled.div`
  height: 100%;
`;

const Name = styled.button`
  font-family: inherit;
  white-space: nowrap;
  font-size: 3.8rem;
  font-weight: 600;
  color: inherit;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const Toggler = styled.button`
  display: none;
  position: relative;
  fill: #fff;
  background-color: transparent;
  backface-visibility: hidden;
  height: 3rem;
  width: 3rem;
  transition: all 1s;
  border: none;
  cursor: pointer;
  outline: none;

  :hover {
    fill: ${color_grey_6};
  }

  ${media.sizeIII`
		display: block;
	`}
`;

const NavList = styled.div`
  position: relative;
  display: flex;
  list-style: none;

  ${media.sizeIII`
  flex-direction: column;
`}

  &--item-active {
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const NavItem = styled.li`
  :not(:last-child) {
    margin-right: 0.5rem;
  }

  ${media.sizeIII`
    width: 100%;
    
		:not(:last-child) {
			margin-bottom: .38rem;
		}
	`}

  button {
    font-family: inherit;
    font-size: 1.8rem;
    font-weight: 400;
    white-space: nowrap;
    padding: 1rem 1.5rem;
    background: transparent;
    color: inherit;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    transition: all 0.2s;

    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    :active {
      background-color: rgba(255, 255, 255, 0.15);
    }

    ${media.sizeIII`
			width: 100%;
			text-align: left;
		`}
  }
`;
