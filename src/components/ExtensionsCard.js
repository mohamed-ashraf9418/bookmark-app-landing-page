import React from "react";
import styled from "styled-components";
import { TertiaryHeadline } from "../GlobalStyle";
import ChromeLogo from "../assets/logo-chrome.svg";
import FirefoxLogo from "../assets/logo-firefox.svg";
import OperaLogo from "../assets/logo-opera.svg";
import DotsImage from "../assets/bg-dots.svg";

const Card = styled.div`
  grid-column: ${(props) => props.gridColumn && `${props.gridColumn}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 3.8rem 0 2.4rem;
  border-radius: 1.2rem;
  box-shadow: 0px 5px 15px #ced4da;
  margin-top: ${(props) => props.margin && `${props.margin}`};

  @media (max-width: 75em) {
    width: 28rem;
  }

  @media (max-width: 62em) {
    width: 25rem;
  }

  @media (max-width: 48em) {
    grid-column: 1 / 2;
    margin: 0;
    width: 27rem;
    padding: 3.8rem 0;
  }
`;

const BrowserImage = styled.img`
  height: 8rem;
  width: auto;
  display: block;
  margin-bottom: 2.4rem;
`;

const VersionSpan = styled.span`
  display: block;
  font-size: 1.5rem;
  margin: 0.8rem 0 2.8rem;
  color: inherit;
`;

const CardLink = styled.button`
  border: none;
  background: none;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  background-color: #5368df;
  padding: 1rem 2.4rem;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 12px 0px #e9ecef;
  font-size: 1.4rem;
  text-decoration: none;
  margin-top: 1.8rem;

  &:hover,
  &:active {
    color: #5368df;
    background-color: #fff;
    border: 1px solid currentColor;
  }
`;

const Image = styled.img`
  display: block;

  @media (max-width: 75em) {
    width: 100%;
  }
`;

const ExtensionsCard = (props) => {
  const { browserName, browserVersion, gridColumn, margin } = props;
  let imgSrc = ChromeLogo;
  if (browserName === "Firefox") {
    imgSrc = FirefoxLogo;
  } else if (browserName === "Opera") {
    imgSrc = OperaLogo;
  }

  return (
    <Card gridColumn={gridColumn} margin={margin}>
      <BrowserImage src={imgSrc} alt={`${browserName} Logo`} />
      <TertiaryHeadline>Add to {browserName}</TertiaryHeadline>
      <VersionSpan>Minimum Version {browserVersion}</VersionSpan>
      <Image src={DotsImage} alt="Dots" />
      <CardLink>Add &amp; Install Extension</CardLink>
    </Card>
  );
};

export default ExtensionsCard;
