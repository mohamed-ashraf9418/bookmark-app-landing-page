import React from "react";
import styled from "styled-components";
import { SecondaryHeadline, Paragraph } from "../GlobalStyle";
import { useState } from "react";
import SimpleBookmarking from "./SimpleBookmarking";
import SpeedySearching from "./SpeedySearching";
import EasySharing from "./EasySharing";

const Section = styled.section`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  @media (max-width: 48em) {
    margin-bottom: 10rem;
  }
`;

export const FeaturesDescription = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  max-width: 46rem;
  text-align: center;

  @media (max-width: 36em) {
    max-width: 44rem;
  }
`;

const TabsContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.4rem 0;

  @media (max-width: 48em) {
    flex-direction: column;
    justify-content: unset;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  display: inline-block;
  font-size: 1.4rem;
  padding: 2rem 4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (props.tabActive ? "#252b46" : "inherit")};
  font-weight: ${(props) => (props.tabActive ? "500" : "400")};
  border-bottom: 2px solid
    ${(props) => (props.tabActive ? "#fa5757" : "#9194a1")};

  &:hover {
    color: #fa5757;
  }
`;

const TabContent = styled.div`
  grid-column: 1 / -1;
  margin-top: 3.6rem;
  height: 43rem;

  @media (max-width: 48em) {
    height: 56rem;
  }
`;

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);
  const tabHandler = (tabNumber, e) => {
    setActiveTab(tabNumber);
  };
  return (
    <Section>
      <FeaturesDescription>
        <SecondaryHeadline>Features</SecondaryHeadline>
        <Paragraph>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Paragraph>
      </FeaturesDescription>
      <TabsContainer>
        <Tab onClick={tabHandler.bind(null, 1)} tabActive={activeTab === 1}>
          Simple Bookmarking
        </Tab>
        <Tab onClick={tabHandler.bind(null, 2)} tabActive={activeTab === 2}>
          Speedy Seaching
        </Tab>
        <Tab onClick={tabHandler.bind(null, 3)} tabActive={activeTab === 3}>
          Easy Sharing
        </Tab>
      </TabsContainer>
      <TabContent>
        <SimpleBookmarking activeTab={activeTab} />
        <SpeedySearching activeTab={activeTab} />
        <EasySharing activeTab={activeTab} />
      </TabContent>
    </Section>
  );
};

export default Features;
