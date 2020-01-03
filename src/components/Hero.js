import React from "react";
import styled from "styled-components";

import { Socials } from "../atoms/socials";
import { H1, H4 } from "../atoms/typography";
import { color_primary, color_secondary } from "../atoms/variables";

import avatarImage from "../images/avatar.png";

import { media } from "../utilities/mediaQueriesBuilder";

const Hero = () => {
  return (
    <StyledSection>
      <InfoBox>
        <Avatar />
        <Name>Patrick Becker</Name>
        <Status>&lt; Webentwickler &#47;&gt;</Status>
        <Wrapper>
          <Button>Kontakt</Button>
        </Wrapper>
        <div>
          <Socials />
        </div>
      </InfoBox>
    </StyledSection>
  );
};

export default Hero;

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem 6rem;
  height: 95.5vh;
  background-color: rgba(0, 0, 0, 0.02);
`;

const InfoBox = styled.div`
  text-align: center;
`;

const Avatar = styled.div`
	display: inline-block;
	background-image: url('${avatarImage}');
	background-position: center;
	background-size: cover;
	height: 10rem;
	width: 10rem;
	border-radius: 50%;
	margin-bottom: 2rem;
`;

const Name = styled(H1)`
  color: #fff;
  margin-bottom: 1.3rem;
`;

const Status = styled(H4)`
  color: ${color_secondary};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: auto;
`;

const Button = styled.a`
  color: #fff;
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: inherit;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 3px;
  border: 2px solid ${props => (props.secondary ? "#fff" : "transparent")};
  background-color: ${props =>
    props.secondary ? "rgba(27,32,35, .6)" : color_primary};
  cursor: pointer;
  transition: all 0.2s;
  outline: none;

  :hover,
  :active {
    transform: translateY(-2px);
  }

  :active {
    transform: translateY(0);
  }

  ${media.sizeV`
		width: 13rem;
	`}
`;
