import React from "react";
import styled from "styled-components";

import { Socials } from "../atoms/socials";
import { H1, P } from "../atoms/typography";
import { color_primary, color_grey_5, color_grey_6 } from "../atoms/variables";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>So bin Ich zu erreichen:</Title>
        <Content>
          E-Mail:{" "}
          <MailTo href="mailto: kontakt@patrickbecker.me" rel="noopener">
            kontakt@patrickbecker.me
          </MailTo>
        </Content>
        <Copyright>Copyright &copy; 2020. Patrick Becker</Copyright>
        <Socials small />
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 8rem 6rem 7rem 6rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled(H1)`
  margin-bottom: 3rem;
  color: #fff;
`;

const Content = styled(P)`
  margin-bottom: 3rem;
  color: ${color_grey_6};
`;

const Copyright = styled(P)`
  font-size: 1.4rem;
  color: ${color_grey_5};
`;

const MailTo = styled.a`
  :link,
  :visited {
    padding: 0.1rem 0.5rem;
    background-color: ${color_primary};
    color: #fff;
    text-decoration: none;
  }

  :hover {
    border-bottom: 2px solid #fff;
  }
`;
