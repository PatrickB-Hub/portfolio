import React from "react";
import styled from "styled-components";

import { color_secondary, color_grey_4, color_grey_5 } from "./variables";

import { ReactComponent as Github } from "../images/icons/github.svg";
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg";

export const Socials = ({ small }) => (
  <Wrapper isSmall={small}>
    <SocialIcon
      isSmall={small}
      href="https://github.com/PatrickB-Hub/"
      target="_blank"
      rel="noopener"
    >
      <Github />
    </SocialIcon>
    <SocialIcon
      isSmall={small}
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener"
    >
      <Linkedin />
    </SocialIcon>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  margin-top: ${props => (props.isSmall ? "1rem" : "1.8rem")};
  justify-content: center;
`;

const SocialIcon = styled.a`
	fill: ${color_grey_5};
	height: ${props => (props.isSmall ? "2rem" : "2.5rem")};
	width: ${props => (props.isSmall ? "2rem" : "2.5rem")};
	cursor: pointer;
	transition: all .2s;

	:not(:last-child){
		margin-right: ${props => (props.isSmall ? "1rem" : "1.2rem")};
	};

	:hover,
  :focus {
		fill: ${color_secondary};
	;

	:active{
		fill: ${color_grey_4};
	;
`;
