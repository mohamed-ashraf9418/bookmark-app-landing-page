import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";
import NavLinks from "./NavLinks";
import MobileNavigation from "./MobileNavigation";
import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";
import ReactRouterLink from "./ReactRouterLink";

const MainHeader = styled.header`
  grid-column: 2 / 10;
  padding: 0 4rem;

  @media (max-width: 75em) {
    grid-column: 1 / 11;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0;
  margin-right: 4rem;

  img {
    display: block;
  }

  @media (max-width: 48em) {
    margin: 0;
  }
`;

const StyledLogo = styled(Logo)`
  display: block;
`;

const HamburgerIcon = styled(Hamburger)`
  display: none;

  @media (max-width: 48em) {
    display: block;
  }
`;

const MobileNavigationButton = styled.button`
  background: none;
  border: none;
  display: none;

  &:focus {
    outline: 1px solid #9194a1;
    outline-offset: 1px;
  }

  @media (max-width: 48em) {
    display: block;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavigationHandler = () => {
    setIsMobile(true);
  };

  const mobileMenuCloseHandler = useCallback((menuState) => {
    if (menuState) {
      setIsMobile(false);
    }
  }, []);
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }
    if (!isMobile) {
      document.body.style.overflow = "scroll";
    }
  }, [isMobile]);

  return (
    <MainHeader>
      <FlexContainer>
        <ReactRouterLink to="/home">
          <StyledLogo />
        </ReactRouterLink>
        <NavLinks header={true} />
        <MobileNavigationButton onClick={mobileNavigationHandler}>
          <HamburgerIcon />
        </MobileNavigationButton>
        {isMobile && (
          <MobileNavigation
            onMenuClose={mobileMenuCloseHandler}
            isMobile={isMobile}
          />
        )}
      </FlexContainer>
    </MainHeader>
  );
};

export default Header;
