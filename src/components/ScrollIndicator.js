import React from "react";
import styled from "styled-components";

import { bounce } from "../atoms/keyframes";

const ScrollIndicator = () => {
  return <Indicator />;
};

export default ScrollIndicator;

const Indicator = styled.div`
  ::after {
    content: "╲╱";
    color: #fff;
    position: absolute;
    top: 83%;
    left: 50%;
    opacity: 0.8;
    width: 6rem;
    font-size: 1.8rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    bottom: 2rem;
    margin-left: -3rem;
    animation: ${bounce} 1s ease infinite;
  }
`;
