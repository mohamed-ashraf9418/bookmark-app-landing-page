import React from "react";
import { TertiaryHeadline, Paragraph } from "../GlobalStyle";
import {
  Container,
  ImageContainer,
  FeatureDetails,
  MoreInfoLink,
  StyledBookmarkingImage,
} from "./SimpleBookmarking";
import styled from "styled-components";
import Illustration from "../assets/illustration-features-tab-2.svg";

const SpeedySearchingContainer = styled(Container)`
  display: ${(props) => (props.activeTab === 2 ? "grid" : "none")};

  @media (max-width: 48em) {
    display: ${(props) => (props.activeTab === 2 ? "flex" : "none")};
  }
`;

const NewImageContainer = styled(ImageContainer)`
  justify-content: flex-end;

  &::before {
    top: 8rem;
    right: 9rem;
    width: 100%;
    height: 82%;
    border-bottom-right-radius: 15rem;
  }
`;

const StyledSearchingImage = styled(StyledBookmarkingImage)`
  width: 64%;

  @media (max-width: 75em) {
    transform: scale(0.9);
  }
`;

const SpeedySearching = (props) => {
  const { activeTab } = props;
  return (
    <SpeedySearchingContainer activeTab={activeTab}>
      <NewImageContainer>
        <StyledSearchingImage
          src={Illustration}
          alt="Speedy Searching Feature"
        />
      </NewImageContainer>
      <FeatureDetails>
        <TertiaryHeadline>Intelligent search</TertiaryHeadline>
        <Paragraph>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </Paragraph>
        <MoreInfoLink to="/">More Info</MoreInfoLink>
      </FeatureDetails>
    </SpeedySearchingContainer>
  );
};

export default SpeedySearching;
