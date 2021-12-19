import React from "react";
import styled, { keyframes, css } from "styled-components";
import { StyledLogo } from "./Footer";
import { ReactComponent as Close } from "../assets/icon-close.svg";
import { List } from "./NavLinks";
import { useState, useEffect } from "react";
import {
  SocialContainer,
  StyledFacebook,
  StyledTwitter,
  FooterLink,
} from "./Footer";
import ReactRouterLink from "./ReactRouterLink";

const topToBottom = keyframes`
  from {
    top: -100%;
  }
  
  to {
    top: 0;
  }
`;

const bottomToTop = keyframes`
  from {
    top: 0;
  }
  
  to {
    top: -100%;
  }
`;

const OverLay = styled.div`
  display: none;

  @media (max-width: 48em) {
    background-color: rgba(37, 43, 70, 0.9);
    height: 100%;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
    padding: 3.2rem 4rem;
    animation: ${(props) =>
      props.isMobile &&
      css`
        ${topToBottom} 0.4s ease-in-out
      `};
    animation: ${(props) =>
      props.close &&
      css`
        ${bottomToTop} 0.4s ease-in-out
      `};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const WhiteLogo = styled(StyledLogo)`
  path {
    fill: #fff;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;
`;

const CloseIcon = styled(Close)`
  display: block;
`;

const MobileList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  position: relative;
`;

const MobileListItem = styled.li`
  text-align: center;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    height: 0.7px;
    width: 100%;
    position: absolute;
    top: -2rem;
    left: 0rem;
    background-color: #9194a1;
  }
`;

const MobileLink = styled(ReactRouterLink)`
  &:link,
  &:visited {
    font-size: 1.8rem;
    font-weight: 400;
    transition: none;
    letter-spacing: 1.4px;
    color: #fff;
    border: 1px solid transparent;
    max-width: 100%;
    border-radius: 4px;
    padding: 1rem 0;
    transition: all 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }

  &:hover,
  &:active {
    color: inherit;
    border: 1px solid #fff;
  }
`;

const MobileNavigation = (props) => {
  const { onMenuClose, isMobile } = props;
  const [close, setClose] = useState(false);
  useEffect(() => {
    if (close) {
      setTimeout(() => {
        onMenuClose(close);
      }, 300);
    }
    const escapeKeyHandler = (e) => {
      if (e.key === "Escape") {
        setClose(true);
      }
    };
    document.addEventListener("keydown", escapeKeyHandler);
    return () => document.removeEventListener("keydown", escapeKeyHandler);
  }, [close, onMenuClose]);
  const closeButtonHandler = () => {
    setClose(true);
  };
  return (
    <OverLay isMobile={isMobile} close={close} onClick={closeButtonHandler}>
      <LogoContainer>
        <ReactRouterLink to="/home">
          <WhiteLogo />
        </ReactRouterLink>
        <CloseButton onClick={closeButtonHandler}>
          <CloseIcon />
        </CloseButton>
      </LogoContainer>
      <MobileList>
        <MobileListItem>
          <MobileLink to="/features">Features</MobileLink>
        </MobileListItem>
        <MobileListItem>
          <MobileLink to="/pricing">Pricing</MobileLink>
        </MobileListItem>
        <MobileListItem>
          <MobileLink to="/contact">Contact</MobileLink>
        </MobileListItem>
        <MobileListItem>
          <MobileLink to="/login">Login</MobileLink>
        </MobileListItem>
      </MobileList>
      <SocialContainer>
        <FooterLink to="/facebook-page">
          <StyledFacebook />
        </FooterLink>
        <FooterLink to="/twitter-page">
          <StyledTwitter />
        </FooterLink>
      </SocialContainer>
    </OverLay>
  );
};

export default MobileNavigation;
