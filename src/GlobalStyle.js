import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import ReactRouterLink from "./components/ReactRouterLink";

const GlobStyle = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;

        @media (max-width: 75em) {
          font-size: 55%;
        }

        @media (max-width: 62em) {
          font-size: 50%;
        }

        @media (max-width: 36em) {
          font-size: 45%;
        }
        
        @media (max-width: 23em) {
          font-size: 40%;
        }
    }

    body {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        color: #9194a1;
        background-color: #f8f9fa;
    }
`;

export const EightColContainer = styled.div`
  grid-column: 2 / 10;
  padding: 0 4rem;

  @media (max-width: 75em) {
    grid-column: 1 / 11;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const CenteredFlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const AppGrid = styled.div`
  max-width: 144rem;
  display: grid;
  grid-template-columns: 1fr repeat(8, minmax(min-content, 15rem)) 1fr;
`;

export const Main = styled.main`
  max-width: 144rem;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr repeat(8, minmax(min-content, 15rem)) 1fr;
`;

export const MainHeadline = styled.h1`
  font-weight: 500;
  font-size: 4.4rem;
  color: #252b46;
  letter-spacing: -0.5px;
  line-height: 1;

  @media (max-width: 36em) {
    font-size: 3.6rem;
  }
`;

export const SecondaryHeadline = styled(MainHeadline)`
  line-height: initial;
  letter-spacing: 0px;
  font-size: 2.6rem;
`;

export const TertiaryHeadline = styled(SecondaryHeadline)`
  font-size: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
`;

export const BlueLink = styled(ReactRouterLink)`
  color: #fff;
  background-color: #5368df;
  display: inline-block;
  padding: 1.4rem 2.4rem;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 12px 0px #e9ecef;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;

  &:hover,
  &:active {
    color: #5368df;
    background-color: #fff;
    border: 1px solid currentColor;
  }
`;

export const RedLink = styled(ReactRouterLink)`
  color: #fff;
  background-color: #fa5757;
  display: inline-block;
  padding: 0.8rem 3.2rem;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #e9ecef;
  text-decoration: none;
  font-size: 1.4rem;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    color: #fa5757;
    background-color: #fff;
    border: 1px solid currentColor;
  }
`;

const GlobalStyle = (props) => {
  return <GlobStyle>{props.children}</GlobStyle>;
};

export default GlobalStyle;
