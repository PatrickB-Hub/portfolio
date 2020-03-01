import React, { useState } from "react";
import styled from "styled-components";

import { pulseEffect } from "../atoms/keyframes";
import { projectsList } from "../atoms/projectList";
import { svg_icons } from "../atoms/techIcons";
import { P } from "../atoms/typography";
import {
  color_grey_1,
  color_grey_2,
  color_grey_3,
  color_grey_4,
  color_grey_6,
  color_primary,
  color_primary_dark
} from "../atoms/variables";

import { Container } from "./Container";

import { ReactComponent as GithubSvg } from "../images/icons/github.svg";

import { media } from "../utilities/mediaQueriesBuilder";

const Projects = () => {
  const [showAllState, setShowAllState] = useState({
    isShowAll: false,
    showAllText: "Alle anzeigen"
  });

  const showAll = () => {
    if (showAllState.isShowAll) {
      setShowAllState({
        showAllText: "Alle anzeigen",
        isShowAll: false
      });
    } else {
      setShowAllState({
        showAllText: "Verstecken",
        isShowAll: true
      });
    }
  };

  return (
    <Container title="Projekte" transparent>
      <Wrapper>
        <CardComponent
          projectsList={projectsList}
          isShowAll={showAllState.isShowAll}
        />
        <ShowAllBtn onClick={showAll}>{showAllState.showAllText}</ShowAllBtn>
      </Wrapper>
    </Container>
  );
};

export default Projects;

const CardComponent = ({ className, projectsList, isShowAll }) => (
  <Cards className={className} isShowAll={isShowAll}>
    {projectsList.map(
      ({ imgPath, icons, title, description, liveLink, sourceLink }, i) => (
        <Card key={i}>
          <Image>
            <img src={imgPath} alt={description} />
          </Image>
          <DetailsComponent icons={icons} title={title} text={description} />
          <ButtonsComponent live={liveLink} source={sourceLink} />
        </Card>
      )
    )}
  </Cards>
);

const DetailsComponent = ({ className, icons, title, text }) => (
  <Details className={className}>
    <IconsBox>
      {icons.map((index, i) => (
        <Icon color={color_grey_2} key={i}>
          {svg_icons[index].svg}
        </Icon>
      ))}
    </IconsBox>
    <StyledH4>{title}</StyledH4>
    <P>{text}</P>
  </Details>
);

const ButtonsComponent = ({ className, live, source }) => (
  <Buttons className={className}>
    {live.length > 0 && (
      <Button href={live} target="_blank" rel="noopener">
        <WhiteDot id="live" />
        <span>Live</span>
      </Button>
    )}
    {source.length > 0 && (
      <Button href={source} target="_blank" rel="noopener" secondary>
        <Icon id="source">
          <GithubSvg />
        </Icon>
        <span>Source</span>
      </Button>
    )}
  </Buttons>
);

const Wrapper = styled.div`
  width: 100%;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;

  overflow: hidden;
  height: ${props => (props.isShowAll ? "" : "63rem")};
`;

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 60rem;
  margin-bottom: 4rem;
  width: 45%;
  background-color: #fff;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;

  ${media.sizeII`
    width: 80%;
  `}

  ${media.sizeV`
    width: 95%;
  `}
`;

const Image = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  opacity: 0.88;
  overflow: hidden;
  border-bottom: 4px solid ${color_grey_6};

  img {
    height: 100%;
    width: 100%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
`;

const IconsBox = styled.div`
  display: flex;
`;

const Icon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${props => (props.color ? props.color : "#fff")};
  text-align: center;
  margin-right: 0.5rem;
`;

const StyledH4 = styled.h4`
  font-size: 2.2rem;
  font-weight: 400;
  color: ${color_grey_1};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  padding: 2rem;
`;

const Button = styled.a`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  background-color: ${props =>
    props.secondary ? color_grey_4 : color_primary_dark};
  transition: all 0.2s;

  :hover,
  :focus {
    transform: translateY(-1px);
    background-color: ${color_grey_3};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  }

  :active {
    transform: translateY(0);
  }

  :not(:last-child) {
    margin-right: 0.8rem;

    :hover,
    :focus {
      background-color: ${color_primary};
    }
  }
`;

const WhiteDot = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 0.5rem;
  opacity: 1;
  animation: ${pulseEffect} 2s infinite;
`;

const ShowAllBtn = styled.button`
  display: block;
  margin: 1.9rem auto;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${color_grey_4};
  border: none;
  border-bottom: 1px solid ${color_grey_4};
  :hover {
    color: ${color_grey_2};
    border-bottom: 2px solid ${color_grey_2};
    margin-bottom: 1.8rem;
  }
  :active {
    color: ${color_grey_3};
    border-bottom: 1px solid ${color_grey_3};
  }
`;
