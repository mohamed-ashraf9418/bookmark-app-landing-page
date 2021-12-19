import React from "react";
import styled, { keyframes } from "styled-components";
import { TertiaryHeadline, Paragraph } from "../GlobalStyle";
import { BlueLink } from "../GlobalStyle";
import Illustration from "../assets/illustration-features-tab-1.svg";

const slideLeftToRight = keyframes`
  from {
    right: 100%;
  }
  
  to {
    right: 0;
  }
`;

export const Container = styled.div`
  display: ${(props) => (props.activeTab === 1 ? "grid" : "none")};
  grid-template-columns: minmax(min-content, 70rem) 14rem minmax(
      min-content,
      36rem
    );
  position: relative;
  animation: ${slideLeftToRight} 1s ease-out;

  @media (max-width: 75em) {
    grid-template-columns: minmax(min-content, 60rem) 7rem minmax(
        min-content,
        36rem
      );
  }

  @media (max-width: 48em) {
    display: ${(props) => (props.activeTab === 1 ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 8rem;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 1 / 2;
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: "";
    display: block;
    background-color: #5368df;
    position: absolute;
    top: 8rem;
    right: 9rem;
    width: 100%;
    height: 90%;
    z-index: 1;
    border-bottom-right-radius: 15rem;
  }
`;

export const StyledBookmarkingImage = styled.img`
  display: block;
  width: 78%;
  position: relative;
  z-index: 2;

  @media (max-width: 75em) {
    transform: scale(0.9);
  }
`;

export const FeatureDetails = styled.div`
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2.4rem;

  @media (max-width: 48em) {
    grid-column: unset;
    align-self: center;
    text-align: center;
    align-items: center;
    width: 50%;
  }

  @media (max-width: 48em) {
    width: 70%;
  }
`;

export const MoreInfoLink = styled(BlueLink)`
  padding: 1rem 2rem;
  font-size: 1.3rem;
`;

const SimpleBookmarking = (props) => {
  const { activeTab } = props;
  return (
    <Container activeTab={activeTab}>
      <ImageContainer>
        <StyledBookmarkingImage
          src={Illustration}
          alt="Simple Bookmarking Feature"
        />
      </ImageContainer>
      <FeatureDetails>
        <TertiaryHeadline>Bookmark in one click</TertiaryHeadline>
        <Paragraph>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </Paragraph>
        <MoreInfoLink to="/more-info">More Info</MoreInfoLink>
      </FeatureDetails>
    </Container>
  );
};

export default SimpleBookmarking;
