import React from "react";
import styled from "styled-components";
import { FeaturesDescription } from "./Features";
import {
  SecondaryHeadline,
  Paragraph,
  CenteredFlexContainer,
} from "../GlobalStyle";
import Accordion from "./Accordion";
import { MoreInfoLink } from "./SimpleBookmarking";

const Section = styled.section`
  grid-column: 1 / -1;
  padding-bottom: 12rem;
`;

const FAQsDescription = styled(FeaturesDescription)`
  grid-column: unset;
  max-width: 45rem;
  margin-bottom: 6rem;

  @media (max-width: 23em) {
    max-width: 40rem;
  }
`;

const FAQs = () => {
  return (
    <Section>
      <FAQsDescription>
        <SecondaryHeadline>Frequently Asked Questions</SecondaryHeadline>
        <Paragraph>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </Paragraph>
      </FAQsDescription>
      <CenteredFlexContainer>
        <Accordion />
      </CenteredFlexContainer>
      <CenteredFlexContainer>
        <MoreInfoLink to="/more-info">More Info</MoreInfoLink>
      </CenteredFlexContainer>
    </Section>
  );
};

export default FAQs;
