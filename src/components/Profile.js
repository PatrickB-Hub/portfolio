import React from "react";
import styled from "styled-components";

import { P } from "../atoms/typography";

import { Container } from "./Container";

const Profile = () => {
  return (
    <Container title="Über mich">
      <Wrapper>
        <P>
          Ich bin Software Entwickler mit Fokus auf Webentwicklung. Meine
          Passion für modern-design und clean-code lebe Ich am liebsten in der
          Frontend Entwicklung aus. Die Möglichkeit meiner Kreativität freien
          Lauf zu lassen und dabei visuell ansprechende und konzeptionell
          stimmige Produkte zu erschaffen, reizt mich dabei am meisten.
          <br />
          <br />
          Meine Stärken sehe Ich daher in den Bereichen HTML, CSS, JavaScript
          und React, aber auch im Backend mit PHP, MySQL und NodeJS mit MongoDB.
        </P>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 4rem;
`;
