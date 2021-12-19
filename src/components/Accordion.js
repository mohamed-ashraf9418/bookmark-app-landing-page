import React from "react";
import styled from "styled-components";
import AccordionItem from "./AccordionItem";

const FAQS = [
  {
    question: "What is Bookmark ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed augue lacus viverra.",
  },
  {
    question: "How can i request a new browser ?",
    answer:
      "Arcu cursus vitae congue mauris rhoncus aenean vel elit. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Blandit aliquam etiam erat velit scelerisque in dictum non.",
  },
  {
    question: "Is there a mobile app ?",
    answer:
      "Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.",
  },
  {
    question: "What about other Chromium browsers ?",
    answer:
      "Bibendum neque egestas congue quisque egestas diam. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Ut faucibus pulvinar elementum integer enim neque volutpat. Nam libero justo laoreet sit. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nec dui nunc mattis enim.",
  },
];

const List = styled.ul`
  max-width: 44rem;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: 36em) {
    max-width: 44rem;
  }

  @media (max-width: 23em) {
    max-width: 40rem;
  }
`;

const GreyBorder = styled.span`
  display: inline-block;
  height: 2px;
  width: 100%;
  background-color: #dee2e6;
  position: absolute;
  bottom: 1.8rem;
`;

const Accordion = () => {
  const questions = FAQS.map((object, index) => (
    <AccordionItem
      key={index}
      question={object.question}
      answer={object.answer}
    />
  ));
  return (
    <List>
      {questions}
      <GreyBorder />
    </List>
  );
};

export default Accordion;
