import React from "react";
import styled from "styled-components";
import { FeaturesDescription } from "./Features";
import { SecondaryHeadline, Paragraph } from "../GlobalStyle";
import ExtensionsCard from "./ExtensionsCard";

const Section = styled.section`
  grid-column: 1 / -1;
  margin: 10rem;

  @media (max-width: 75em) {
    margin: 3rem 3rem 10rem;
  }
`;

const ExtensionsDescription = styled(FeaturesDescription)`
  grid-column: unset;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, minmax(min-content, 1fr)) 1fr;
  gap: 3.2rem;
  grid-column: 2 / 5;
  margin-top: 5.5rem;

  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 4rem;
  }
`;

const Extensions = () => {
  return (
    <Section>
      <ExtensionsDescription>
        <SecondaryHeadline>Download the extension</SecondaryHeadline>
        <Paragraph>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </Paragraph>
      </ExtensionsDescription>
      <CardsContainer>
        <ExtensionsCard
          browserName="Chrome"
          browserVersion="62"
          gridColumn="2 / 3"
        />
        <ExtensionsCard
          browserName="Firefox"
          browserVersion="55"
          gridColumn="3 / 4"
          margin="3.8rem"
        />
        <ExtensionsCard
          browserName="Opera"
          browserVersion="46"
          gridColumn="4 / 5"
          margin="7.6rem"
        />
      </CardsContainer>
    </Section>
  );
};

export default Extensions;
