import React from "react";
import styled from "styled-components";

import { Title } from "../atoms/typography";
import { min_width, max_width } from "../atoms/variables";

import { media } from "../utilities/mediaQueriesBuilder";

export const Container = ({ title, transparent, children }) => (
  <OutterDiv>
    <Title>{title}</Title>
    <InnerDiv transparent={transparent}>{children}</InnerDiv>
  </OutterDiv>
);

const OutterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 6rem 2rem 6rem;
  margin: 0 auto;

  ${media.sizeIV`
    padding: 8rem 4rem 2rem 4rem;
    margin-bottom: -1px;
	`}

  ${media.sizeIII`
		padding: 8rem 5rem 2rem 5rem;
	`}
`;

// transparent prop makes it invisible
const InnerDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.transparent ? `none` : `3rem`)};
  min-width: ${min_width};
  max-width: ${max_width};
  width: 100%;
  background-color: ${props => (props.transparent ? `transparent` : `#fff`)};
  box-shadow: ${props =>
    props.transparent ? `none` : `0 6px 10px 0 rgba(0,0,0,.15)`};
  border-radius: 10px;
  transition: all 0.3s;

  ${media.sizeVI`
		padding: ${props => (props.transparent ? `none` : `2.5rem`)};
	`}
`;
