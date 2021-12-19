import React, { useRef } from "react";
import styled from "styled-components";
import { Paragraph } from "../GlobalStyle";
import Arrow from "../assets/icon-arrow.svg";
import { useReducer } from "react";

const Question = styled.p`
  color: #212529;
  font-size: 1.8rem;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  cursor: pointer;
  position: relative;
  margin-bottom: 2rem;

  &:hover ${Question} {
    color: #fa5757;
  }

  &::after {
    content: "";
    display: inline-block;
    height: 2px;
    width: 100%;
    position: absolute;
    top: -2rem;
    background-color: #dee2e6;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ArrowIcon = styled.img`
  display: block;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => props.activeStatus && "rotate(-180deg)"};
  margin-right: 1.5rem;
`;

const AnswerContainer = styled.div`
  max-height: ${(props) => (props.activeStatus ? `${props.height}` : "0px")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
`;

const Answer = styled(Paragraph)`
  line-height: 1.8;
  color: #868e96;
`;

const accReducerFunction = (state, action) => {
  if (action.type === "ACCORDION_TOGGLE") {
    return { active: !state.active, height: action.value };
  }
  return { active: false, height: null };
};

const AccordionItem = (props) => {
  const { question, answer } = props;
  const accInitialState = {
    active: false,
    height: null,
  };
  const [accState, dispatch] = useReducer(accReducerFunction, accInitialState);
  const listItemRef = useRef();

  const activeStatusHandler = () => {
    dispatch({
      type: "ACCORDION_TOGGLE",
      value: listItemRef.current.scrollHeight + "px",
    });
  };

  return (
    <ListItem onClick={activeStatusHandler} activeStatus={accState.active}>
      <QuestionContainer>
        <Question>{question}</Question>
        <ArrowIcon src={Arrow} alt="Arrow SVG" activeStatus={accState.active} />
      </QuestionContainer>
      <AnswerContainer
        activeStatus={accState.active}
        height={accState.height}
        ref={listItemRef}
      >
        <Answer>{answer}</Answer>
      </AnswerContainer>
    </ListItem>
  );
};

export default AccordionItem;
