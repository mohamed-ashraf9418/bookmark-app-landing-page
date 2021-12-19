import React from "react";
import styled from "styled-components";
import HEROIMG from "../assets/illustration-hero.svg";
import { MainHeadline, Paragraph } from "../GlobalStyle";
import { BlueLink } from "../GlobalStyle";

const Section = styled.section`
  padding: 6rem 4rem 12rem;
  grid-column: 2 / 11;
  display: flex;
  gap: 6rem;
  align-items: center;
  overflow-x: hidden;

  @media (max-width: 75em) {
    grid-column: 1 / 11;
  }

  @media (max-width: 62em) {
    gap: 0rem;
  }

  @media (max-width: 48em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 4rem;
    margin-bottom: 10rem;
    gap: 4rem;
  }
`;

const HeroDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-right: 4.5rem;
  flex-basis: 48rem;

  @media (max-width: 75em) {
    padding-right: 0rem;
    flex-basis: 56rem;
  }

  @media (max-width: 62em) {
    flex-basis: 70rem;
  }

  @media (max-width: 48em) {
    flex-basis: auto;
    order: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 12rem;
  }

  @media (max-width: 36em) {
    padding: 0 5rem;
  }

  @media (max-width: 23em) {
    padding: 0;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const RedLink = styled(BlueLink)`
  color: #343a40;
  background-color: #f1f3f5;

  &:hover,
  &:active {
    color: #343a40;
    background-color: #fff;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    display: block;
    background-color: #5368df;
    position: absolute;
    top: 32%;
    left: 33%;
    width: 100%;
    height: 65%;
    z-index: 1;
    border-bottom-left-radius: 15rem;
  }

  @media (max-width: 48em) {
    order: 1;

    &::before {
      top: 25%;
      left: 30%;
      height: 70%;
    }
  }
  @media (max-width: 36em) {
    &::before {
      left: 24%;
    }
  }
`;

const HeroImage = styled.img`
  display: block;
  width: 100%;
  transform: scale(0.8) translateX(0);
  position: relative;
  z-index: 2;

  @media (max-width: 62em) {
    transform: scale(0.9) translateX(7%);
  }
`;

const Hero = () => {
  return (
    <Section>
      <HeroDetails>
        <MainHeadline>A Simple Bookmark Manager</MainHeadline>
        <Paragraph>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </Paragraph>
        <LinksWrapper>
          <BlueLink to="/chrome-extension">Get it on Chrome</BlueLink>
          <RedLink to="/firefox-extension">Get it on Firefox</RedLink>
        </LinksWrapper>
      </HeroDetails>
      <HeroImageContainer>
        <HeroImage src={HEROIMG} alt="Hero Image" />
      </HeroImageContainer>
    </Section>
  );
};

export default Hero;
