import React from "react";
import { TertiaryHeadline, Paragraph } from "../GlobalStyle";
import {
  Container,
  FeatureDetails,
  MoreInfoLink,
  ImageContainer,
  StyledBookmarkingImage,
} from "./SimpleBookmarking";
import styled from "styled-components";
import Illustration from "../assets/illustration-features-tab-3.svg";

const EasySharingContainer = styled(Container)`
  display: ${(props) => (props.activeTab === 3 ? "grid" : "none")};

  @media (max-width: 48em) {
    display: ${(props) => (props.activeTab === 3 ? "flex" : "none")};
  }
`;

const NewImageContainer = styled(ImageContainer)`
  &::before {
    top: 8rem;
    height: 82%;
  }
`;

const StyledSharingImage = styled(StyledBookmarkingImage)`
  width: 62%;
  transform: translate(-13%, -5%) scale(1);

  @media (max-width: 75em) {
    transform: translate(-7%, -3%) scale(0.9);
  }
`;

const EasySharing = (props) => {
  const { activeTab } = props;
  return (
    <EasySharingContainer activeTab={activeTab}>
      <NewImageContainer>
        <StyledSharingImage src={Illustration} alt="Easy Sharing Feature" />
      </NewImageContainer>
      <FeatureDetails>
        <TertiaryHeadline>Share your Bookmarks</TertiaryHeadline>
        <Paragraph>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </Paragraph>
        <MoreInfoLink to="/">More Info</MoreInfoLink>
      </FeatureDetails>
    </EasySharingContainer>
  );
};

export default EasySharing;
