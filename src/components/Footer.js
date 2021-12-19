import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";
import { ReactComponent as FacebookLogo } from "../assets/icon-facebook.svg";
import { ReactComponent as TwitterLogo } from "../assets/icon-twitter.svg";
import ReactRouterLink from "./ReactRouterLink";

const FooterSection = styled.footer`
  grid-column: 1 / 11;
  display: grid;
  grid-template-columns: 1fr repeat(8, minmax(min-content, 15rem)) 1fr;
  background-color: #252b46;
  padding: 2.4rem 0;
`;
const Container = styled.div`
  grid-column: 2 / 10;
  padding: 0 4rem;
  display: flex;
  gap: 3.8rem;
  align-items: center;

  @media (max-width: 48em) {
    grid-column: 1 / -1;
    flex-direction: column;
    gap: 4rem;
    padding: 2.4rem 4rem;
  }
`;

export const StyledLogo = styled(Logo)`
  display: block;
  path {
    fill: #fff;
  }
`;

const NavSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const StyledFacebook = styled(FacebookLogo)`
  display: block;

  path {
    transition: all 0.3s ease-in-out;
  }
`;

export const StyledTwitter = styled(TwitterLogo)`
  display: block;

  path {
    transition: all 0.3s ease-in-out;
  }
`;

export const FooterLink = styled(ReactRouterLink)`
  &:hover ${StyledFacebook} path,
  &:hover ${StyledTwitter} path {
    fill: #fa5757;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterLink to="/home">
          <StyledLogo />
        </FooterLink>
        <NavSocialContainer>
          <NavLinks />
          <SocialContainer>
            <FooterLink to="/facebook-page">
              <StyledFacebook />
            </FooterLink>
            <FooterLink to="/twitter-page">
              <StyledTwitter />
            </FooterLink>
          </SocialContainer>
        </NavSocialContainer>
      </Container>
    </FooterSection>
  );
};

export default Footer;
