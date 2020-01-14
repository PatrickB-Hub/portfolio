import React from "react";
import styled from "styled-components";

import { svg_icons } from "../atoms/techIcons";
import { H3 } from "../atoms/typography";

import { Container } from "./Container";

import { media } from "../utilities/mediaQueriesBuilder";

const Skills = () => {
  return (
    <Container title="Fähigkeiten">
      <Icons iconList={svg_icons} />
    </Container>
  );
};

export default Skills;

// construct an icon tag for each icon in the array
const Icons = ({ iconList }) => (
  <Wrapper>
    {Object.keys(iconList).map((key, index) => (
      <IconBox key={index}>
        <Icon color={iconList[key].color}>{iconList[key].svg}</Icon>
        <H3>{key}</H3>
      </IconBox>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 0.4fr));
    justify-items: center;
    align-content: start;
    align-items: start;
  }

  padding-top: 1rem;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.5rem;
  min-width: 11rem;
  transition: all 0.2s;

  & > :last-child {
    margin-top: 1rem;
  }

  :hover {
    transform: scale(1.05);
  }

  ${media.sizeVI`
		min-width: 9rem;
	`}
`;

const Icon = styled.div`
  text-align: center;
  border-radius: 1.5rem;
  padding: 1.7rem;
  fill: #fff;
  background-color: ${props => props.color};
  height: 7rem;
  width: 7rem;

  ${media.sizeVI`
		padding: 1.2rem;
		border-radius: 1rem;
		height: 6rem;
		width: 6rem;
	`}
`;
