import React from "react";
import styled from "styled-components";
import { RedLink } from "../GlobalStyle";
import ReactRouterLink from "./ReactRouterLink";

const Nav = styled.nav`
  color: ${(props) => !props.header && "#FFF"};
  display: block;

  @media (max-width: 48em) {
    display: ${(props) => (!props.header ? "block" : "none")};
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.8rem;

  @media (max-width: 48em) {
    flex-direction: ${(props) => !props.header && "column"};
    gap: ${(props) => !props.header && "3rem"};
  }
`;

export const Link = styled(ReactRouterLink)`
  display: inline-block;

  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.9px;
    color: inherit;
  }

  &:hover,
  &:active {
    color: #fa5757;
  }
`;

const NavLinks = (props) => {
  const { header } = props;
  return (
    <Nav header={header}>
      <List>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {header && (
          <li>
            <RedLink to="/login">Login</RedLink>
          </li>
        )}
      </List>
    </Nav>
  );
};

export default NavLinks;
