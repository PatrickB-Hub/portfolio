import React from "react";
import styled from "styled-components";
import { meteorAnimation } from "../atoms/keyframes";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const MeteorShower = ({ count }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => {
        return (
          <MeteorWrapper key={index}>
            <Meteor />
          </MeteorWrapper>
        );
      })}
    </>
  );
};

// wrapper for meteor, spawns at random location on screen and goes down diagonal
const MeteorWrapper = styled.div`
  position: fixed;
  left: ${() => `calc(${getRandomInt(10, 90)}%)`};
  top: ${() => `calc(${getRandomInt(10, 90)}%)`};
  z-index: -99;
  transform: rotate(220deg);
`;

// each meteor will have randomized width, animation duration and delay
const Meteor = styled.i`
  position: fixed;
  width: ${() => `calc(${getRandomInt(2, 8)}px)`};
  height: 90rem;
  animation-name: ${() => meteorAnimation};
  animation-delay: ${() => `${getRandomInt(0, 10)}s`};
  animation-duration: ${() => `${getRandomInt(20, 50)}s`};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in;
  background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, #fff 80%);
  opacity: 0;
`;
